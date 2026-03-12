import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 5,
  socketTimeout: 10000,   // ✅ fail fast if Gmail hangs
  greetingTimeout: 5000,
});

// Pre-warm connection at startup
transporter.verify().catch(() => {});

const row = (label: string, value: string) =>
  `<tr>
    <td style="padding:8px;border:1px solid #ddd;width:120px"><strong>${label}</strong></td>
    <td style="padding:8px;border:1px solid #ddd">${value || "N/A"}</td>
  </tr>`;

export async function POST(req: NextRequest) {
  const { name, email, phone, date, time, services, message } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { success: false, error: "Name, email and phone are required." },
      { status: 400 }
    );
  }

  // ✅ Fire emails WITHOUT awaiting — respond to user in ~5ms
  Promise.all([
    transporter.sendMail({
      from: `"Appointment Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Appointment: ${name}`,
      html: `
        <h2 style="color:#031B4E">New Appointment Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Date", date)}
          ${row("Time", time)}
          ${row("Services", services)}
          ${row("Message", message)}
        </table>`,
    }),
    transporter.sendMail({
      from: `"ClinicMaster" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Appointment Request Received – ClinicMaster",
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto">
          <h2 style="color:#031B4E">Hi ${name}, we got your request!</h2>
          <p>Our team will confirm your appointment shortly.</p>
          <table style="border-collapse:collapse;width:100%">
            ${row("Date", date)}
            ${row("Time", time)}
            ${row("Services", services)}
          </table>
          <br/>
          <p style="color:#00BDE0;font-weight:600">– ClinicMaster Team</p>
        </div>`,
    }),
  ]).catch((err) => {
    // Log silently — user already got success response
    console.error("Background email error:", err?.code, err?.message);
  });

  // ✅ Returns immediately — user redirects to /thank-you in ~5ms
  return NextResponse.json({ success: true, message: "Appointment request sent!" });
}