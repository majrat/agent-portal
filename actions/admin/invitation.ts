"use server";

import { connectDB } from "lib/mongodb";
import invitation from "models/invitations";
import formData from "form-data";
import sgMail from "@sendgrid/mail";
const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env;

export const send_invitation = async (values: any) => {
  const { user_id, first_name, last_name, email, subject, message, org_code } =
    values;

  try {
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
      from: SENDGRID_SENDER_EMAIL as string, // Change to your verified sender
      subject: subject,
      text: message,
      html: `<p>Congratulations! Mr/Mrs ${
        first_name + " " + last_name
      }. ${message}. Please use the this <strong>organization code: ${org_code}</strong>, along with your email, to access the agent portal and begin your journey with us.</p>`,
    };
    sgMail.send(msg);
    const new_invitation = new invitation({
      admin_id: user_id,
      email,
      subject,
      message,
      org_code,
    });
    await new_invitation.save();
    return {
      success: true,
      message: "Invitation sent successfully",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const get_invitation = async (email: any) => {
  try {
    await connectDB();
    const invitation_data = await invitation.findOne({
      email: email,
    });
    if (!invitation_data) {
      throw new Error("Sorry, You haven't recieved invitation from us yet.");
    }
    const invitation_json = JSON.parse(JSON.stringify(invitation_data));
    return {
      success: true,
      message:
        "Please enter the Unique Code we send in our invitation email to continue.",
      data: invitation_json,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
