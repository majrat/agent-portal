"use server";
import { connectDB } from "lib/mongodb";
import AgencyCreditApplication from "models/agency-credit-application";

export const setAgencyCreditApplication = async (values: any) => {
  try {
    const { user_id, answers, questions } = values;

    console.log("user_id, answers, questions ==========>", values);
    await connectDB();

    const AgencyCreditApplicationData = await AgencyCreditApplication.findOne({
      user_id,
    });
    if (AgencyCreditApplicationData) {
      throw new Error("Agency Credit Application already answered!");
    }

    const new_AgencyCreditApplication = new AgencyCreditApplication({
      user_id,
      answers,
      questions,
      status: 1,
    });

    await new_AgencyCreditApplication.save();
    return {
      success: "success",
      message: "Agency Credit Application saved successfully",
    };
  } catch (error) {
    console.error(error);
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
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
