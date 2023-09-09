import mongoose from "mongoose";
import configKeys from "../configKeys";

const DB_NAME = configKeys.DB_NAME || "passwordManager";
const MONGO_DB_URL = configKeys.MONGO_DB_URL || "mongodb+srv://sarathrajan:cnbvRjsjfyQA90Se@timeshub.l0vdmu5.mongodb.net/test?retryWrites=true&w=majority"



const connectDB = async () => {
    const dbObject = {
      dbName: DB_NAME,
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    };
    try {
      await mongoose.connect(MONGO_DB_URL,dbObject);
      console.log(`Database connected successfully`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

// const connectDB = async () => {
//     const dbObject = {
//       dbName: DB_NAME,
//     };
//     try {
//       mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   };


  export default connectDB;
  