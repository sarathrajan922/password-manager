import mongoose from "mongoose";

const dbName = 'passManager'
const MONGO_DB_URL = 'mongodb+srv://sarathrajan:cnbvRjsjfyQA90Se@timeshub.l0vdmu5.mongodb.net/test?authSource=timesHub&authMechanism=SCRAM-SHA-1'

const connectDB = async () => {
    const dbObject = {
      dbName: dbName,
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
  