import mongoose from "mongoose";
const { MONGODB_URI, AZURE_COSMOS_CONNECTIONSTRING, NODE_ENV } = process.env;
const options = { dbName: "brand-worldwide-bpa-db" };
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      NODE_ENV === "development"
        ? (MONGODB_URI as string)
        : (AZURE_COSMOS_CONNECTIONSTRING as string),
      options
    );
    console.log("connected to = ", connection);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
