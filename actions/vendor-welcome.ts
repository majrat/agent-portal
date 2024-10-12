"use server";
import { connectDB } from "lib/mongodb";
import vendor_welcome from "models/vendor-welcome";

export const get_vendor_welcome = async (user_id: any) => {
  try {
    await connectDB();
    const vendor_welcome_found = await vendor_welcome.findOne({ user_id });
    if (!vendor_welcome_found) {
      throw new Error("No vendor_welcome exists!");
    }
    const vendor_welcome_founds = JSON.parse(
      JSON.stringify(vendor_welcome_found)
    );
    return {
      success: true,
      message: "vendor welcome found",
      data: vendor_welcome_founds,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const add_vendor_welcome = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    const userFound = await vendor_welcome.findOne({ user_id });
    if (userFound) {
      throw new Error("already agreed!");
    }

    const user = new vendor_welcome({
      user_id,
      accepted: true,
    });

    await user.save();
    return {
      success: true,
      message: "vendor welcome saved",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
