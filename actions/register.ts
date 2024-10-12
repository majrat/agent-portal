"use server";
import { connectDB } from "lib/mongodb";
import user_model from "models/user";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, name, org_code } = values;

  try {
    await connectDB();
    const userFound = await user_model.findOne({ email });
    if (userFound) {
      throw new Error("User with this email already exist!");
    }

    const available_org_codes = ["123456", "678901", "1234567"];
    if (available_org_codes.includes(org_code)) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new user_model({
        name,
        org_code,
        email,
        password: hashedPassword,
      });
      await user.save();
      return {
        success: true,
        message: "New agent registeration successfull",
      };
    }
    throw new Error("Wrong Organisation Code");
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
