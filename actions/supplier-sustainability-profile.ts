"use server";
import { connectDB } from "lib/mongodb";
import SupplierSustainabilityProfile from "models/supplier-sustainability-profile-qna";

export const addSupplierSustainabilityProfile = async (values: any) => {
  const { user_id, answers, questions } = values;

  try {
    await connectDB();

    const addSupplierSustainabilityProfileFound =
      await SupplierSustainabilityProfile.findOne({ user_id });
    if (addSupplierSustainabilityProfileFound) {
      return {
        error: "questionaire already answered!",
      };
    }

    const newSupplierSustainabilityProfile = new SupplierSustainabilityProfile({
      user_id,
      answers,
      questions,
    });

    await newSupplierSustainabilityProfile.save();
  } catch (e) {
    console.log(e);
  }
};

export const getSupplierSustainabilityProfile = async (id: any) => {
  try {
    await connectDB();
    const SupplierSustainabilityProfileFounds =
      await SupplierSustainabilityProfile.findOne({ user_id: id });
    if (!SupplierSustainabilityProfileFounds) {
      return {
        exists: false,
        error: "No Questions exists!",
      };
    }
    const SupplierSustainabilityProfileFound = JSON.parse(
      JSON.stringify(SupplierSustainabilityProfileFounds)
    );
    console.log(SupplierSustainabilityProfileFound);
    return {
      exists: true,
      data: SupplierSustainabilityProfileFound,
    };
  } catch (e) {
    console.log(e);
  }
};
