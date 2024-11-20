"use server";
import { connectDB } from "lib/mongodb";
import AgencyCreditApplication from "models/agency-credit-application";
import { type_of_agency_credit_application } from "types/agency-credit-application";

export const setAgencyCreditApplication = async (
  submit_data: type_of_agency_credit_application,
  user_id: any
) => {
  console.log("=========================================================================================================>", submit_data)
  try {
    await connectDB();

    const addAgencyCreditApplicationFound =
      await AgencyCreditApplication.findOne({
        user_id,
      });
    if (addAgencyCreditApplicationFound) {
      await AgencyCreditApplication.updateOne(
        { user_id },
        {
          $set: {
            ...submit_data,
            status: 1,
          },
        },
        { upsert: true }
      );
    }

    const newAgencyCreditApplication = new AgencyCreditApplication({
      ...submit_data,
      user_id,
      status: 1,
    });

    await newAgencyCreditApplication.save();
    return {
      success: "success",
      message: "AgencyCreditApplication saved",
    };
  } catch (error) {
    // console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getAgencyCreditApplication = async (id: any) => {
  try {
    await connectDB();
    const AgencyCreditApplicationFounds = await AgencyCreditApplication.findOne(
      {
        user_id: id,
      }
    );
    if (AgencyCreditApplicationFounds) {
      const AgencyCreditApplicationFound = JSON.parse(
        JSON.stringify(AgencyCreditApplicationFounds)
      );
      return {
        success: "success",
        message: "AgencyCreditApplication found",
        data: AgencyCreditApplicationFound,
      };
    }
    throw new Error("AgencyCreditApplication Data Not Found");
  } catch (error) {
    // console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
