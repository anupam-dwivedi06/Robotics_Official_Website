export const workshops = {
  aero: {
    slug: "aero",
    name: "AERO-DRONE WORKSHOP",
    qrImage: process.env.NEXT_PUBLIC_AERO_DRONE_QR || "/qr-aero-drone.jpeg",
    upiId: "mehul@fam",
    originalPrice: 999,
    price: 599,
  },
  ai: {
    slug: "ai",
    name: "AI-INTEGRATED ROBOTICS WORKSHOP",
    qrImage: process.env.NEXT_PUBLIC_AI_ROBOTICS_QR || "/qr-ai-robotics.jpeg",
    upiId: "7225815482@fam",
    originalPrice: 299,
    price: 199,
  },
};

export const registrationFields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "wpNumber", label: "WhatsApp number", type: "tel", autoComplete: "tel" },
  { name: "college", label: "College / school", type: "text", autoComplete: "organization" },
  { name: "year", label: "Year of study", type: "text", autoComplete: "off" },
  { name: "know", label: "How did you hear about us?", type: "text", autoComplete: "off" },
  { name: "collegeId", label: "College ID / scholar number", type: "text", autoComplete: "off" },
];