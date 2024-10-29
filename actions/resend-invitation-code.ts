"use server";

import sgMail from "@sendgrid/mail";
import { get_invitation } from "./admin/invitation";
import user_model from "models/user";
import bcrypt from "bcryptjs";

const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env;

export const resend_invitation_code = async (values: any) => {
  const { password, email } = values;

  try {
    const user = await user_model.findOne({ email });
    const password_match = await bcrypt.compare(password, user.password);
    if (!password_match) throw new Error("Wrong Password");

    const invitation_code_found = await get_invitation(email);
    if (invitation_code_found.success) {
      sgMail.setApiKey(SENDGRID_API_KEY as string);
      const msg = {
        to: email, // Change to your recipient
        from: SENDGRID_SENDER_EMAIL as string, // Change to your verified resender
        subject: "RESEND:" + invitation_code_found.data.subject,
        text: "RESEND:" + invitation_code_found.data.message,
        html: `<p>Hi Agent! Please use the following <strong>organization code: ${invitation_code_found.data.org_code}</strong>, along with your email, to access the agent portal and begin your journey with us.</p>`,
      };
      sgMail.send(msg);
      return {
        success: true,
        message: "RESEND invitation Code sent successfully",
      };
    }
    throw new Error(invitation_code_found.message);
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
