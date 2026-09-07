export const workshops = {
  aero: {
    slug: "aero",
    name: "AERO-DRONE WORKSHOP",
    qrImage: process.env.NEXT_PUBLIC_AERO_DRONE_QR || "/qr-aero-drone.jpeg",
  },
  ai: {
    slug: "ai",
    name: "AI-INTEGRATED ROBOTICS WORKSHOP",
    qrImage: process.env.NEXT_PUBLIC_AI_ROBOTICS_QR || "/qr-ai-robotics.jpeg",
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