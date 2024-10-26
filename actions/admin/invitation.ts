"use server";

import { connectDB } from "lib/mongodb";
import invitation from "models/invitations";
import formData from "form-data";
import sgMail from "@sendgrid/mail";
const { SENDGRID_API_KEY } = process.env;

export const send_invitation = async (values: any) => {
  const { user_id, first_name, last_name, email, subject, message, org_code } =
    values;

  try {
    console.log("values====>", values);
    await connectDB();

    const send_invitation_found = await invitation.findOne({
      email,
      org_code,
    });
    if (send_invitation_found) {
      throw new Error("Already Invited!");
    }

    sgMail.setApiKey(SENDGRID_API_KEY as string);
    const msg = {
      to: email, // Change to your recipient
      from: "newglobalvisionmjauharali@gmail.com", // Change to your verified sender
      subject: subject,
      text: message,
      html: `<p>Congratulations! Mr/Mrs ${
        first_name + " " + last_name
      }. You’ve been invited to join Priority Principle as an agent. Please use the following <strong>organization code: ${org_code}</strong>, along with your email, to access the agent portal and begin your journey with us.</p>`,
    };
    sgMail.send(msg);
    return {
      success: true,
      message: "Invitation sent successfully",
    };
    // const new_invitation = new invitation({
    //   user_id,
    //   email,
    //   subject,
    //   message,
    //   org_code,
    // });

    // await new_invitation.save();
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const get_invitation = async (id: any) => {
  try {
    await connectDB();
    const invitation_data = await invitation.findOne({
      user_id: id,
    });
    if (!invitation_data) {
      throw new Error("No Questions exists!");
    }
    const invitation_json = JSON.parse(JSON.stringify(invitation_data));
    return {
      success: true,
      message: "Cargo security profile form found",
      data: invitation_json,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
