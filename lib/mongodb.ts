import mongoose from "mongoose";
const { MONGODB_URI, AZURE_COSMOS_CONNECTIONSTRING } = process.env;
const options = { dbName: "priority-worldwide-bpa-db" };
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      AZURE_COSMOS_CONNECTIONSTRING as string,
      options
    );
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
