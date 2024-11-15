"use server";
import { connectDB } from "lib/mongodb";
import nda from "models/nda";

export const setNDA = async (values: any) => {
  const {
    contracted_partner_date,
    contracted_partner_printed_name,
    contracted_partner_signature,
    priority_worldwide_date,
    priority_worldwide_printed_name,
    priority_worldwide_signature,
    user_id,
  } = values;

  try {
    await connectDB();

    const addNDAFound = await nda.findOne({
      user_id,
    });
    if (addNDAFound) {
      await nda.updateOne(
        { user_id },
        {
          $set: {
            contracted_partner: {
              date: contracted_partner_date,
              printed_name: contracted_partner_printed_name,
              signature: contracted_partner_signature,
            },
            priority_worldwide: {
              date: priority_worldwide_date,
              printed_name: priority_worldwide_printed_name,
              signature: priority_worldwide_signature,
            },
            status: 1,
          },
        },
        { upsert: true }
      );
    }

    const newNDA = new nda({
      contracted_partner: {
        date: contracted_partner_date,
        printed_name: contracted_partner_printed_name,
        signature: contracted_partner_signature,
      },
      priority_worldwide: {
        date: priority_worldwide_date,
        printed_name: priority_worldwide_printed_name,
        signature: priority_worldwide_signature,
      },
      user_id,
      status: 1,
    });

    await newNDA.save();
    return {
      success: true,
      message: "NDA saved",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const getNDA = async (id: any) => {
  try {
    await connectDB();
    const NDAFounds = await nda.findOne({
      user_id: id,
    });
    if (NDAFounds) {
      const NDAFound = JSON.parse(JSON.stringify(NDAFounds));
      return {
        success: true,
        message: "NDA found",
        data: NDAFound,
      };
    }
    throw new Error("NDA Data Not Found");
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
