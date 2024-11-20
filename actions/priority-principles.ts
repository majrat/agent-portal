"use server";
import { connectDB } from "lib/mongodb";
import priority_principles from "models/priority-principles";

export const setPriorityPrinciples = async (values: any) => {
  const { user_id, accepted } = values;

  try {
    await connectDB();

    const addPriorityPrinciplesFound = await priority_principles.findOne({
      user_id,
    });
    if (addPriorityPrinciplesFound) {
      throw new Error("Already answered!");
    }

    const newPriorityPrinciples = new priority_principles({
      user_id,
      accepted,
    });

    await newPriorityPrinciples.save();
    return {
      success: "success",
      message: "Priority principles saved",
    };
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};

export const getPriorityPrinciples = async (id: any) => {
  try {
    await connectDB();
    const PriorityPrinciplesFounds = await priority_principles.findOne({
      user_id: id,
    });
    if (PriorityPrinciplesFounds) {
      const PriorityPrinciplesFound = JSON.parse(
        JSON.stringify(PriorityPrinciplesFounds)
      );
      return {
        success: "success",
        message: "Priority principles saved",
        data: PriorityPrinciplesFound,
      };
    }
    throw new Error("Not Agreed to Priority Principles")
  } catch (error) {
    console.error(error);
    return { success: "failed", message: `${error}` };
  }
};
