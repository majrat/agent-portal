"use server";
import { connectDB } from "@/lib/mongodb";
import code_of_conduct_qna from "@/models/code-of-conduct";
import path from "path";
import fs from "fs";

async function savePDFFile(params: any) {
  // Decode the Base64 string
  const buffer: any = Buffer.from(params.content, "base64");
  console.log("buffer===========> ", buffer);

  // Define the file path
  const filePath = path.join(process.cwd(), "public", "files", params.name);

  // Ensure the directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  // Save the file
  fs.writeFileSync(filePath, buffer);

  console.log("filePath=====> ", filePath);
  return filePath;
}

export const addCodeOfConductQnA = async (values: any) => {
  const { user_id, answers, questions } = values;

  try {
    // console.log("answers=====> ", answers.question1[0])
    // SAVE THE FILE IN A STORAGE
    const filePath = await savePDFFile(answers.question1[0]);
    // REASSIGN THAT FILE PATH IN QUESTION
    answers.question1 = filePath;
    // console.log("answers=====> ", answers)

    await connectDB();

    const addcodeOfConductQnAFound = await code_of_conduct_qna.findOne({
      user_id,
    });
    if (addcodeOfConductQnAFound) {
      return {
        error: "Code of conduct already answered!",
      };
    }

    const newCodeOfConductQnA = new code_of_conduct_qna({
      user_id,
      answers,
      questions,
    });

    await newCodeOfConductQnA.save();
  } catch (e) {
    console.log(e);
  }
};

export const getCodeOfConductQnA = async (id: any) => {
  try {
    await connectDB();
    const codeOfConductQnAFounds = await code_of_conduct_qna.find({ user_id: id });
    if (!codeOfConductQnAFounds) {
      return {
        error: "No Questions exists!",
      };
    }
    const codeOfConductQnAFound = JSON.parse(
      JSON.stringify(codeOfConductQnAFounds)
    );
    return codeOfConductQnAFound;
  } catch (e) {
    console.log(e);
  }
};
