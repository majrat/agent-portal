"use server";

import { connectDB } from "lib/mongodb";
import cargo_security_profile from "models/cargo-security-profile";

export const add_cargo_security_profile = async (values: any) => {
  const { user_id, answers, questions } = values;

  try {
    await connectDB();

    const add_cargo_security_profile_found =
      await cargo_security_profile.findOne({
        user_id,
      });
    if (add_cargo_security_profile_found) {
      throw new Error("Already answered!");
    }

    const new_cargo_security_profile = new cargo_security_profile({
      user_id,
      answers,
      questions,
    });

    await new_cargo_security_profile.save();
    return {
      success: true,
      message: "Cargo security profile form saved successfully",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const get_cargo_security_profile = async (id: any) => {
  try {
    await connectDB();
    const cargo_security_profile_data = await cargo_security_profile.findOne({
      user_id: id,
    });
    if (!cargo_security_profile_data) {
      throw new Error("No Questions exists!");
    }
    const cargo_security_profile_json = JSON.parse(
      JSON.stringify(cargo_security_profile_data)
    );
    return {
      success: true,
      message: "Cargo security profile form found",
      data: cargo_security_profile_json,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const get_all_cargo_security_profile = async (user_role: any) => {
  try {
    if (user_role !== "ADMIN") {
      throw new Error("You are not Authorized. Only Admin have access.");
    }
    await connectDB();
    const cargo_security_profile_data = await cargo_security_profile.find();
    if (!cargo_security_profile_data) {
      throw new Error("No Questions exists!");
    }
    const all_cargo_security_profile_json = JSON.parse(
      JSON.stringify(cargo_security_profile_data)
    );
    return {
      success: true,
      message: "Cargo security profile forms found",
      data: all_cargo_security_profile_json,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
