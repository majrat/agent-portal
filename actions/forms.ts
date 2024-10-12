"use server";
import { connectDB } from "lib/mongodb";
import forms from "models/forms";

export const post_forms = async (values: any) => {
  const data = values;

  try {
    await connectDB();

    const add_post_forms = await forms.findOne({
      user_id: data.user_id,
    });
    if (add_post_forms) {
      await forms
        .updateOne(
          { user_id: data.user_id },
          { $setOnInsert: { ...data }, $set: { ...data } },
          { upsert: true }
        )
        .then(() => {
          return {
            success: true,
            message: "Post forms saved successfully",
          };
        })
        .catch((error) => {
          throw new Error(`${error}`);
        });
    }

    const newVendorWelcome = new forms({
      user_id: data.user_id,
      ...data,
    });

    await newVendorWelcome;
    return {
      success: true,
      message: "Post forms saved successfully",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const get_form = async (id: any) => {
  try {
    await connectDB();
    const formsFounds = await forms.findOne({ user_id: id });
    if (!formsFounds) {
      throw new Error("formsFounds Not exists!");
    }
    const formsFound = JSON.parse(JSON.stringify(formsFounds));
    return {
      success: true,
      message: "New agent registeration successfull",
      data: formsFound,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
