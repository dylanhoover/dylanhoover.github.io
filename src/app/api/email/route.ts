import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name}; Subject: ${subject}`,
    text: message,
  };

  const sendMailPromise = () => {
    return new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error: Error | null) => {
        if (!error) {
          resolve("Email sent successfully");
        } else {
          reject(error.message);
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
