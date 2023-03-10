import { createTransport } from "nodemailer";
import "dotenv/config";
import { IEmailRequest } from "../interfaces/email.interface";

export const sendEmail = async ({ to, subject, text }: IEmailRequest) => {
  const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter
    .sendMail({
      from: "motors_shop@hotmail.com",
      to: to,
      subject: subject,
      html: text,
    })
    .then(() => {
      console.log("Email send with success");
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Error sending email, try again later");
    });
};
