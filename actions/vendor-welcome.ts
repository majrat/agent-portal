"use server";
import { connectDB } from "lib/mongodb";
import vendor_welcome from "models/vendor-welcome";

export const get_vendor_welcome = async (user_id: any) => {
  console.log("values==>",user_id)
  try {
    await connectDB();
    const vendor_welcome_found = await vendor_welcome.findOne({ user_id });
    if (!vendor_welcome_found) {
      return {
        error: "No vendor_welcome exists!",
      };
    }
    const vendor_welcome_founds = JSON.parse(
      JSON.stringify(vendor_welcome_found)
    );
    // console.log(vendor_welcomeFound);
    return vendor_welcome_founds;
  } catch (e) {
    console.log(e);
    return {
      error: `Something Went Wrong: Info: ${e}`,
    };
  }
};

export const add_vendor_welcome = async (values: any) => {
  const { user_id } = values;

  try {
    await connectDB();
    const userFound = await vendor_welcome.findOne({ user_id });
    if (userFound) {
      return {
        error: "already agreed!",
      };
    }
    console.log("values in add_vendor_welcome=========> ", values);

    const user = new vendor_welcome({
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
