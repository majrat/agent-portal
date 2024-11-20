"use server";

import sgMail from "@sendgrid/mail";
import { getInvitation } from "./admin/invitation";
import user_model from "models/user";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const { SENDER_EMAIL, SENDER_PASSWORD, NODE_ENV } = process.env;

export const resetInvitationCode = async (values: any) => {
  const { password, email } = values;

  try {
    const user = await user_model.findOne({ email });
    const password_match = await bcrypt.compare(password, user.password);
    if (!password_match) throw new Error("Wrong Password");

    const invitation_code_found = await getInvitation(email);
    if (invitation_code_found.success) {
      let transporter =
        NODE_ENV === "development"
          ? nodemailer.createTransport({
              service: "Gmail",
              host: "smtp.gmail.com", // Use Gmail service
              port: 465,
              secure: true,
              auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASSWORD,
              },
            })
          : nodemailer.createTransport({
              host: "smtp.office365.com",
              port: 587,
              secure: false,
              auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASSWORD,
              },
              tls: {
                rejectUnauthorized: true,
              },
            });

      const mailOptions = {
        from: SENDER_EMAIL,
        to: email,
        subject: "RESEND:" + invitation_code_found.data.subject,
        text: `"RESEND:" + invitation_code_found.data.message,
        <p>Hi Agent! Please use the following <strong>organization code: ${invitation_code_found.data.org_code}</strong>, along with your email, to access the agent portal and begin your journey with us.</p>`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      return {
        success: "success",
        message: "RESEND invitation Code sent successfully",
      };
    }
    throw new Error(invitation_code_found.message);
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
