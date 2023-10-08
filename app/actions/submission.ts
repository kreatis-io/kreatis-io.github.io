"use server";

export const runtime = 'edge' 

import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 25,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: email,
    pass: password,
  },
});

export async function submit(prevState: any, formData: FormData) {
  try {
    const mailOptions: Object = {
      from: email,
      to: "contact@kreatis.io",
      subject: `New Message from ${formData.get("name")}, Email: ${formData.get(
        "email"
      )}`,
      text: formData.get("message"),
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info);
    revalidatePath("/");
    return { message: "success" };
  } catch (e) {
    console.error(e);
    return { message: "err" };
  }
}

function sendMail(formData: FormData) {}
