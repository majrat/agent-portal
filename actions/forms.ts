"use server";
import { connectDB } from "lib/mongodb";
import forms from "models/forms";

export const post_forms = async (values: any) => {
  const data = values;

  try {
    await connectDB();

    const addVendorWelcomeFound = await forms.findOne({
      user_id: data.user_id,
    });
    if (addVendorWelcomeFound) {
    return await forms.updateOne(
      { user_id: data.user_id },
      { $setOnInsert: { ...data }, $set: { ...data } },
      { upsert: true }
    );
    }

    const newVendorWelcome = new forms({
      user_id: data.user_id,
      ...data,
    });

    await newVendorWelcome.save();
  } catch (e) {
    console.log(e);
  }
};

export const get_form = async (id: any) => {
  try {
    await connectDB();
    const formsFounds = await forms.findOne({ user_id: id });
    if (!formsFounds) {
      return {
        error: "formsFounds Not exists!",
      };
    }
    const formsFound = JSON.parse(JSON.stringify(formsFounds));
    console.log("formsFound===>", formsFound);
    return formsFound;
  } catch (e) {
    console.log(e);
  }
};
