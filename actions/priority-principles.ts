"use server";
import { connectDB } from "lib/mongodb";
import priority_principles from "models/priority-principles";

export const acceptPriorityPrinciples = async (values: any) => {
  const { user_id, accepted } = values;

  try {
    await connectDB();

    const addPriorityPrinciplesFound = await priority_principles.findOne({ user_id });
    if (addPriorityPrinciplesFound) {
      return {
        error: "Already answered!",
      };
    }

    const newPriorityPrinciples = new priority_principles({
      user_id,
      accepted
    });

    await newPriorityPrinciples.save();
  } catch (e) {
    console.log(e);
  }
};

export const getPriorityPrinciples = async (id: any) => {
  try {
    await connectDB();
    const PriorityPrinciplesFounds = await priority_principles.findOne({ user_id: id });
    const PriorityPrinciplesFound = JSON.parse(JSON.stringify(PriorityPrinciplesFounds));
    console.log("PriorityPrinciplesFound===>", PriorityPrinciplesFound);
    return PriorityPrinciplesFound;
  } catch (e) {
    console.log(e);
  }
};
