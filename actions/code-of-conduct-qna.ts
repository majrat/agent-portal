"use server";
// import { connectDB } from "@/lib/mongodb";
import code_of_conduct_qna from "models/code-of-conduct";
import { connectDB } from "lib/mongodb";

export const setCodeOfConductQnA = async (values: any) => {
  try {
    const { user_id, answers, questions } = values;

    await connectDB();

    const code_of_conduct_qna_data = await code_of_conduct_qna.findOne({
      user_id,
    });
    if (code_of_conduct_qna_data) {
      throw new Error("Code of conduct already answered!");
    }

    const new_code_of_conduct_qna = new code_of_conduct_qna({
      user_id,
      answers,
      questions,
    });

    await new_code_of_conduct_qna.save();
    return {
      success: true,
      message: "Code of conduct saved successfully",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const getCodeOfConductQnA = async (id: any) => {
  try {
    await connectDB();
    const codeOfConductQnAFounds = await code_of_conduct_qna.findOne({
      user_id: id,
    });
    if (!codeOfConductQnAFounds) {
      throw new Error("No Questions exists!");
    }
    const codeOfConductQnAFound = JSON.parse(
      JSON.stringify(codeOfConductQnAFounds)
    );
    return {
      success: true,
      message: "Code of conduct form found",
      data: codeOfConductQnAFound,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
