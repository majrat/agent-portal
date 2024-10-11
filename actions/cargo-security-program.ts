"use server";
import { connectDB } from "lib/mongodb";
import cargo_security_program from "models/cargo-security-program";

export const get_cargo_security_program = async (user_id: any) => {
  console.log("values==>",user_id)
  try {
    await connectDB();
    const cargo_security_program_found = await cargo_security_program.findOne({ user_id });
    if (!cargo_security_program_found) {
      return {
        error: "No cargo_security_program exists!",
      };
    }
    const cargo_security_program_founds = JSON.parse(
      JSON.stringify(cargo_security_program_found)
    );
    // console.log(cargo_security_programFound);
    return cargo_security_program_founds;
  } catch (e) {
    console.log(e);
    return {
      error: `Something Went Wrong: Info: ${e}`,
    };
  }
};

export const add_cargo_security_program = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    const userFound = await cargo_security_program.findOne({ user_id });
    if (userFound) {
      return {
        error: "already agreed!",
      };
    }
    console.log("values in add_cargo_security_program=========> ", values);

    const user = new cargo_security_program({
      user_id,
      accepted: true,
    });

    await user.save();
    return {
      success: "saved",
    };
  } catch (e) {
    console.log(e);
  }
};
