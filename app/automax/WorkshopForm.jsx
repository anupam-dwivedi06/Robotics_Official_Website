"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { registrationFields } from "./workshopData";

const emptyForm = registrationFields.reduce((values, field) => ({ ...values, [field.name]: "" }), {});

export default function WorkshopForm({ workshop }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => setForm(emptyForm), [workshop.slug]);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setImageName(file.name);
  }

  async function submitForm(event) {
    event.preventDefault();
    if (!imageFile) {
      setStatus("Please upload your payment screenshot.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Uploading registration...");
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("workshop", workshop.name);
    formData.append("image", imageFile);

    try {
      const response = await fetch("/api/registrations", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not save registration.");
      setForm(emptyForm);
      setImageFile(null);
      setImagePreview("");
      setImageName("");
      setStatus("Registration saved successfully.");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080b17] px-5 pb-20 pt-32 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="flex flex-col justify-between rounded-4xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,#143b56,transparent_60%),#101526] p-8 md:p-12">
          <div>
            <Link href="/automax" className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 hover:text-white">Back to AutoMax 5.0</Link>
            <p className="mt-20 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">Workshop registration</p>
            <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">{workshop.name}</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-300">Reserve your place and join a hands-on session built for curious minds, practical builders, and future robotics innovators.</p>
          </div>
          <p className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400"><span className="text-white">Your details are securely stored after submission.</span><br />Use the entries dashboard to review registrations and download an Excel file.</p>
        </section>

        <section className="rounded-4xl border border-white/10 bg-[#11182a] p-6 shadow-2xl md:p-10">
          <div className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-300">Participant details</p><h2 className="mt-2 text-2xl font-bold">Complete your registration</h2></div>
          <div className="mb-8 flex flex-col items-center gap-4 border border-cyan-300/20 bg-[#0b1020] p-5 text-center sm:flex-row sm:text-left">
            <img src={workshop.qrImage} alt={`Scan to pay for ${workshop.name}`} className="h-40 w-40 object-contain" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Scan to pay</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">You can also pay on <span className="font-semibold text-white">{workshop.upiId}</span>.</p>
              <p className="mt-3 text-lg font-bold text-white"><span className="mr-2 text-slate-500 line-through">₹{workshop.originalPrice}</span> ₹{workshop.price}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Upload your payment screenshot below.</p>
            </div>
          </div>
          <form onSubmit={submitForm} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              {registrationFields.map((field) => <label key={field.name} className={field.name === "college" ? "md:col-span-2" : ""}><span className="mb-2 block text-sm font-semibold text-slate-200">{field.label}</span><input required name={field.name} type={field.type} value={form[field.name]} onChange={updateField} autoComplete={field.autoComplete} className="w-full border border-white/10 bg-[#0b1020] px-4 py-3.5 text-white outline-none transition focus:border-cyan-300" /></label>)}
            </div>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-200">Payment QR / receipt image</span><input required name="image" type="file" accept="image/*" onChange={handleImage} className="block w-full border border-dashed border-white/20 bg-[#0b1020] px-4 py-3 text-sm text-slate-300 file:mr-4 file:border-0 file:bg-cyan-300 file:px-3 file:py-2 file:font-bold file:text-slate-950" /><span className="mt-2 block text-xs text-slate-500">Upload the QR or payment screenshot. {imageName}</span></label>
            {imagePreview && <img src={imagePreview} alt="Payment QR or receipt preview" className="max-h-48 max-w-full border border-white/10 object-contain" />}
            <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-300 px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Saving registration..." : "Submit registration"}</button>
            {status && <p role="status" className="text-center text-sm font-semibold text-emerald-300">{status}</p>}
          </form>
        </section>
      </div>
    </main>
  );
}