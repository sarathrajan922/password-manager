"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const configKeys_1 = __importDefault(require("../configKeys"));
const DB_NAME = configKeys_1.default.DB_NAME || "passwordManager";
const MONGO_DB_URL = configKeys_1.default.MONGO_DB_URL || "mongodb+srv://sarathrajan:cnbvRjsjfyQA90Se@timeshub.l0vdmu5.mongodb.net/test?retryWrites=true&w=majority";
// const connectDB = async () => {
//     const dbObject = {
//       dbName: DB_NAME,
//     };
//     try {
//       await mongoose.connect(MONGO_DB_URL,dbObject);
//       console.log(`Database connected successfully`);
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   };
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbObject = {
        dbName: DB_NAME,
    };
    try {
        mongoose_1.default.connect('mongodb://127.0.0.1:27017/test')
            .then(() => console.log('Connected!'));
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
exports.default = connectDB;
