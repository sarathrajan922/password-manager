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
const credential_security_1 = require("../Services/credential_security");
const passwordModel_1 = __importDefault(require("../config/Database/model/passwordModel"));
const userHelper = {
    addPassword: (passwordData) => __awaiter(void 0, void 0, void 0, function* () {
        const checkTitleExist = yield passwordModel_1.default.findOne({
            title: passwordData.title,
        });
        if (!checkTitleExist) {
            const { iv, password } = (0, credential_security_1.encrypt)(passwordData.password);
            const encryptedObj = {
                iv,
                password,
                title: passwordData.title,
            };
            yield passwordModel_1.default.create(encryptedObj);
            return "success";
        }
        else {
            return "titleExist";
        }
    }),
    getAllPasswords: () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield passwordModel_1.default.find();
        return data;
    }),
    deletePassword: (title) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield passwordModel_1.default.findOneAndDelete({ title: title });
        return result;
    }),
};
exports.default = userHelper;
