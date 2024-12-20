"use server";
import { connectDB } from "lib/mongodb";
import vendor_welcome from "models/vendor-welcome";

export const setVendorWelcome = async (values: any) => {
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
      status: 1,
    });

    await user.save();
    return {
      success: "success",
      message: "vendor welcome saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getVendorWelcome = async (user_id: any) => {
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
      success: "success",
      message: "vendor welcome found",
      data: vendor_welcome_founds,
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
