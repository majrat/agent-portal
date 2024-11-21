"use server";
import { connectDB } from "lib/mongodb";
import user_model from "models/user";
import bcrypt from "bcryptjs";
import { getInvitation } from "./admin/invitation";

export const register = async (values: any) => {
  const { email, password, name, org_code } = values;

  try {
    await connectDB();
    const userInvitationDetails = await getInvitation(email);

    if (userInvitationDetails.success) {
      const userFound = await user_model.findOne({ email, org_code });
      if (userFound) {
        throw new Error("User with this email and org_code already exist!");
      }

      if (org_code === userInvitationDetails.data.org_code) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new user_model({
          name,
          org_code,
          email,
          password: hashedPassword,
          email_verified: true,
          status: 1,
        });
        await user.save();
        return {
          success: "success",
          message: "New agent registeration successfull",
        };
      }
      throw new Error("Wrong Organisation Code");
    }
    throw new Error(userInvitationDetails.message);
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
