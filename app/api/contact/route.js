import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial,sans-serif;color:#333;padding:20px;background:#f4f4f4;">
    <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color:#007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left:4px solid #007BFF;padding-left:10px;margin-left:0;">
        ${userMessage}
      </blockquote>
    </div>
  </div>
`;

async function sendEmail({ name, email, message }) {
  try {
    console.log("Sending email via Resend...");
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || process.env.EMAIL_ADDRESS,
      subject: `New Message From ${name}`,
      replyTo: email,
      text: message,
      html: generateEmailTemplate(name, email, message),
    });
    console.log("Resend response:", data);
    return !!data?.id;
  } catch (error) {
    console.error("Email error:", error.response?.data || error.message);
    return false;
  }
}


export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, message: "All fields required" }), { status: 400 });
    }

    const emailSent = await sendEmail({ name, email, message });
    if (!emailSent) {
      return new Response(JSON.stringify({ success: false, message: "Failed to send email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, message: "Message sent!" }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}
