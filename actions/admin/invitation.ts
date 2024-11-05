"use server";

import { connectDB } from "lib/mongodb";
import invitation from "models/invitations";
import nodemailer from "nodemailer";
const { SENDER_EMAIL, SENDER_PASSWORD, NODE_ENV } = process.env;

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
            port: 587, // try 443 if 587 not working
            secure: false,
            auth: {
              user: SENDER_EMAIL,
              pass: SENDER_PASSWORD,
            },
            tls: {
              // ciphers: "SSLv3",
              rejectUnauthorized: true,
            },
            // debug: true,
            // logger: true,
          });

    const mailOptions = {
      from: SENDER_EMAIL,
      to: email,
      subject: subject,
      text: `<p>Congratulations! Mr/Mrs ${
        first_name + " " + last_name
      }. ${message}. Please use the this <strong>organization code: ${org_code}</strong>, along with your email, to access the agent portal and begin your journey with us.</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

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
