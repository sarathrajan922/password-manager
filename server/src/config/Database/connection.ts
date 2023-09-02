import mongoose from "mongoose";
import configKeys from "../configKeys";


const connectDB = async () => {
    const dbObject = {
      dbName: configKeys.DB_NAME,
    };
    try {
      await mongoose.connect(configKeys.MONGO_DB_URL,dbObject);
      console.log(`Database connected successfully`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  export default connectDB;
  