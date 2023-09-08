import mongoose from "mongoose";
import configKeys from "../configKeys";

const DB_NAME = configKeys.DB_NAME || "passwordManager";
const MONGO_DB_URL = configKeys.MONGO_DB_URL || "mongodb+srv://sarathrajan:cnbvRjsjfyQA90Se@timeshub.l0vdmu5.mongodb.net/test?authSource=timesHub&authMechanism=SCRAM-SHA-1"
const connectDB = async () => {
    const dbObject = {
      dbName: DB_NAME,
    };
    try {
      await mongoose.connect(MONGO_DB_URL,dbObject);
      console.log(`Database connected successfully`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  export default connectDB;
  