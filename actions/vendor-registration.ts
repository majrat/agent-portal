"use server";
import { connectDB } from "lib/mongodb";
import vendor_details from "models/vendor-details";

export const setVendorRegistration = async (values: any) => {
  const {
    company_name,
    head_office_address,
    city,
    country,
    telephone,
    fax,
    agent_name,
    title,
    email,
    user_id,
  } = values;

  try {
    await connectDB();

    const addVendorRegistrationFound = await vendor_details.findOne({
      user_id,
    });
    if (addVendorRegistrationFound) {
      await vendor_details.updateOne(
        { user_id },
        {
          $set: {
            company_name,
            head_office_address,
            city,
            country,
            telephone,
            fax,
            agent_name,
            title,
            email,
            status: 1,
          },
        },
        { upsert: true }
      );
    }

    const newVendorRegistration = new vendor_details({
      company_name,
      head_office_address,
      city,
      country,
      telephone,
      fax,
      agent_name,
      title,
      email,
      user_id,
      status: 1,
    });

    await newVendorRegistration.save();
    return {
      success: true,
      message: "Vendor Registration saved",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const getVendorRegistration = async (id: any) => {
  try {
    await connectDB();
    const VendorRegistrationFounds = await vendor_details.findOne({
      user_id: id,
    });
    if (VendorRegistrationFounds) {
      const VendorRegistrationFound = JSON.parse(
        JSON.stringify(VendorRegistrationFounds)
      );
      return {
        success: true,
        message: "Vendor Registration saved",
        data: VendorRegistrationFound,
      };
    }
    throw new Error("Vendor Registration Data Not Found");
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
