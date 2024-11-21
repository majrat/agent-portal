"use server";
import { connectDB } from "lib/mongodb";
import SupplierSustainabilityProfile from "models/supplier-sustainability-profile-qna";

export const setSupplierSustainabilityProfile = async (values: any) => {
  const { user_id, answers, questions } = values;

  try {
    await connectDB();

    const setSupplierSustainabilityProfileData =
      await SupplierSustainabilityProfile.findOne({ user_id });
    if (setSupplierSustainabilityProfileData) {
      throw new Error("questionaire already answered!");
    }

    const newSupplierSustainabilityProfile = new SupplierSustainabilityProfile({
      user_id,
      answers,
      questions,
      status: 1,
    });

    await newSupplierSustainabilityProfile.save();
    return {
      success: "success",
      message: "Supplier sustainability profile saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getSupplierSustainabilityProfile = async (id: any) => {
  try {
    await connectDB();
    const SupplierSustainabilityProfileData =
      await SupplierSustainabilityProfile.findOne({ user_id: id });
    if (!SupplierSustainabilityProfileData) {
      throw new Error("No Questions exists!");
    }
    const SupplierSustainabilityProfileJson = JSON.parse(
      JSON.stringify(SupplierSustainabilityProfileData)
    );
    return {
      success: "success",
      message: "Supplier sustainability profile found",
      data: SupplierSustainabilityProfileJson,
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
