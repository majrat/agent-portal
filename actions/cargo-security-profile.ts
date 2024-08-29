"use server";
import { connectDB } from "@/lib/mongodb";
import cargo_security_profile from "@/models/cargo-security-profile";

export const add_cargo_security_profile = async (values: any) => {
  const { user_id, answers, questions } = values;

  try {
    await connectDB();

    const add_cargo_security_profile_found =
      await cargo_security_profile.findOne({
        user_id,
      });
    if (add_cargo_security_profile_found) {
      throw new Error("already answered!");
    }

    const new_cargo_security_profile = new cargo_security_profile({
      user_id,
      answers,
      questions,
    });

    await new_cargo_security_profile.save();
  } catch (e) {
    throw e;
  }
};

export const get_cargo_security_profile = async (id: any) => {
  try {
    await connectDB();
    const cargo_security_profile_founds = await cargo_security_profile.findOne({
      user_id: id,
    });
    // if (!cargo_security_profile_founds) {
    //   console.log("!assess_already_answered", cargo_security_profile_founds);
    //   return {
    //     statusCode: 404,
    //     error: "No Questions exists!",
    //   };
    // }
    const cargo_security_profile_found = JSON.parse(
      JSON.stringify(cargo_security_profile_founds)
    );
    console.log("assessAlreadyAnswered", cargo_security_profile_found);
    return cargo_security_profile_found;
  } catch (e) {
    console.log(e);
  }
};
