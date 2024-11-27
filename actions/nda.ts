"use server";
import { connectDB } from "lib/mongodb";
import nda from "models/nda";

export const setNDA = async (values: any) => {
  try {
    const { user_id, answers, questions } = values;

    await connectDB();

    const addNDAFound = await nda.findOne({
      user_id,
    });
    if (addNDAFound) {
      throw new Error("NDA already answered!");
    }

    const newNDA = new nda({
      user_id,
      answers,
      questions,
      status: 1,
    });

    await newNDA.save();
    return {
      success: "success",
      message: "NDA saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
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
        success: "success",
        message: "NDA found",
        data: NDAFound,
      };
    }
    throw new Error("NDA Data Not Found");
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
