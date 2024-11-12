"use server";
import { connectDB } from "lib/mongodb";
import user_model from "models/user";
import { getInvitation } from "./admin/invitation";
import bcrypt from "bcryptjs";

export const verifyEmail = async (values: any) => {
  const { email, org_code, password } = values;

  try {
    await connectDB();
    const userInvitationDetails = await getInvitation(email);

    if (userInvitationDetails.success) {
      const user = await user_model.findOne({ email });
      const password_match = await bcrypt.compare(password, user.password);
      if (!password_match) throw new Error("Wrong Password");
      const org_code_match =
        org_code === userInvitationDetails.data.org_code &&
        user.org_code === org_code;
      if (!org_code_match) throw new Error("Wrong Org Code");
      await user_model
        .updateOne(
          { email, org_code },
          { $set: { email_verified: true } },
          { upsert: true }
        )
        .then(() => {
          return {
            success: true,
            message: "Email Verification successfull",
          };
        })
        .catch((error) => {
          console.error(error);
          throw new Error("Wrong email");
        });
    }
    throw new Error(userInvitationDetails.message);
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
