import { NextResponse } from "next/server";
import { Readable } from "node:stream";
import clientPromise from "../../../lib/mongodb";
import cloudinaryClient from "../../../lib/cloudinary";

export const runtime = "nodejs";

const requiredFields = ["name", "email", "wpNumber", "college", "year", "know", "collegeId", "workshop"];
const maxImageSize = 8 * 1024 * 1024;

function missingConfiguration() {
  return !process.env.MONGODB_DB || !process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET;
}

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const upload = cloudinaryClient.uploader.upload_stream(
      { folder: "robotics-automax/registrations", resource_type: "image" },
      (error, result) => error ? reject(error) : resolve(result),
    );
    Readable.from(buffer).pipe(upload);
  });
}

function getRegistrationError(error) {
  if (error?.http_code === 403) {
    const missingCreatePermission = error.message?.includes('missing permissions') && error.message?.includes('create');
    return {
      message: missingCreatePermission
        ? "Cloudinary rejected the upload because this API key lacks create permission. Enable create/upload permission for the key or use a new upload-capable key in .env, then restart the server."
        : "Cloudinary rejected the payment image. Check that CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET belong to the same account and that image uploads are enabled.",
      status: 502,
    };
  }

  return {
    message: process.env.NODE_ENV === "development" && error instanceof Error
      ? `Could not save registration: ${error.message}`
      : "Could not save registration.",
    status: 500,
  };
}

export async function POST(request) {
  if (missingConfiguration()) {
    return NextResponse.json({ error: "MongoDB or Cloudinary environment variables are missing." }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const values = Object.fromEntries(requiredFields.map((field) => [field, String(formData.get(field) || "").trim()]));
    const image = formData.get("image");

    if (requiredFields.some((field) => !values[field]) || !(image instanceof File)) {
      return NextResponse.json({ error: "All registration fields and a payment image are required." }, { status: 400 });
    }
    if (!image.type.startsWith("image/") || image.size > maxImageSize) {
      return NextResponse.json({ error: "Upload an image smaller than 8 MB." }, { status: 400 });
    }

    const upload = await uploadToCloudinary(Buffer.from(await image.arrayBuffer()));
    const client = await clientPromise;
    const database = client.db(process.env.MONGODB_DB);
    const result = await database.collection("registrations").insertOne({
      ...values,
      imageUrl: upload.secure_url,
      imagePublicId: upload.public_id,
      submittedAt: new Date(),
    });

    return NextResponse.json({ id: result.insertedId.toString() }, { status: 201 });
  } catch (error) {
    console.error("Registration creation failed", error);
    const { message, status } = getRegistrationError(error);
    return NextResponse.json({ error: message }, { status });
  }
}

export async function GET(request) {
  if (missingConfiguration()) {
    return NextResponse.json({ error: "MongoDB or Cloudinary environment variables are missing." }, { status: 500 });
  }

  try {
    const filter = request.nextUrl.searchParams.get("workshop");
    const client = await clientPromise;
    const database = client.db(process.env.MONGODB_DB);
    const query = filter ? { workshop: filter } : {};
    const entries = await database.collection("registrations").find(query).sort({ submittedAt: -1 }).toArray();
    return NextResponse.json(entries.map((entry) => ({ ...entry, id: entry._id.toString(), _id: undefined })));
  } catch (error) {
    console.error("Registration fetch failed", error);
    const message = process.env.NODE_ENV === "development" && error instanceof Error
      ? `Could not load registrations: ${error.message}`
      : "Could not load registrations.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
