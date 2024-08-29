"use server";
import { connectDB } from "@/lib/mongodb";
import user_model from "@/models/user";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, name, org_code } = values;

  try {
    await connectDB();
    const userFound = await user_model.findOne({ email, org_code });
    if (userFound) {
      return {
        error: "User with this email or organisation code already exist!",
      };
    }
    console.log("values in register=========> ", values);

    const available_org_codes = ["123456", "678901"];
    if (available_org_codes.includes(org_code)) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new user_model({
        name,
        org_code,
        email,
        password: hashedPassword,
      });
      return await user.save();
    }
    return {
      error: "Wrong Organisation Code",
    };
  } catch (e) {
    console.log(e);
  }
};
