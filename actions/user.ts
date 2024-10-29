"use server";
import { connectDB } from "lib/mongodb";
import user_model from "models/user";

export const getAllusers = async () => {
  try {
    await connectDB();
    const usersFound = await user_model.find({
      role: "USER",
    });
    if (!usersFound) {
      throw new Error("No users exists!");
    }
    const allusersFound = JSON.parse(JSON.stringify(usersFound));

    console.log("allusersFound====>", allusersFound);
    return {
      success: true,
      message: "User data found",
      data: allusersFound,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};

export const userPercentageChange = async () => {
  // Get the current date
  const currentDate = new Date();

  // Calculate the start and end of the current month
  const startOfCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startOfNextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
  );

  // Calculate the start and end of the previous month
  const startOfPreviousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );
  const startOfCurrentMonthForPrevious = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  try {
    // Count the number of users registered in the previous month
    const previousMonthCount = await user_model.countDocuments({
      createdAt: {
        $gte: startOfPreviousMonth,
        $lt: startOfCurrentMonthForPrevious,
      },
    });

    // Count the number of users registered in the current month
    const currentMonthCount = await user_model.countDocuments({
      createdAt: { $gte: startOfCurrentMonth, $lt: startOfNextMonth },
    });

    // Calculate the change
    const change = currentMonthCount - previousMonthCount;

    // Calculate the percentage change
    const percentageChange = (change / previousMonthCount) * 100 || 0; // Handle division by zero
    return {
      success: true,
      message: "Calculated the percentage change",
      data: percentageChange.toFixed(2) + "",
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `${error}` };
  }
};
