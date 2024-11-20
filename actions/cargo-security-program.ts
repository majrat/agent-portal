"use server";
import { connectDB } from "lib/mongodb";
import cargo_security_program from "models/cargo-security-program";

export const setCargoSecurityProgram = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    const cargo_security_program_data = await cargo_security_program.findOne({
      user_id,
    });
    if (cargo_security_program_data) {
      throw new Error("Already agreed!");
    }

    const save_cargo_security_program = new cargo_security_program({
      user_id,
      accepted: true,
    });

    await save_cargo_security_program.save();
    return {
      success: "success",
      message: "Cargo security program form saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getCargoSecurityProgram = async (user_id: any) => {
  try {
    await connectDB();
    const cargo_security_program_data = await cargo_security_program.findOne({
      user_id,
    });
    if (!cargo_security_program_data) {
      throw new Error("No cargo_security_program exists!");
    }
    const cargo_security_program_json = JSON.parse(
      JSON.stringify(cargo_security_program_data)
    );
    return {
      success: "success",
      message: "Cargo security program form found",
      data: cargo_security_program_json,
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
