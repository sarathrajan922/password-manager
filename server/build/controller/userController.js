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
const userHelper_1 = __importDefault(require("../helper/userHelper"));
const credential_security_1 = require("../Services/credential_security");
const userController = {
    demo: (req, res) => {
        res.send("api reached in controller");
    },
    addPassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = userHelper_1.default.addPassword(req.body);
        if ((yield result) === "titleExist") {
            res.send({
                message: "title already exists",
            });
        }
        else {
            res.send({
                message: "password added succesfully",
            });
        }
    }),
    showPassword: (req, res) => {
        var _a, _b;
        const encryptedPassHex = (_a = req.body.password) !== null && _a !== void 0 ? _a : "";
        const ivHex = (_b = req.body.iv) !== null && _b !== void 0 ? _b : "";
        const result = (0, credential_security_1.decrypt)(encryptedPassHex, ivHex);
        console.log(result);
        res.send({
            message: "password decryted succesfully",
            password: result,
        });
    },
    getAllPasswords: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield userHelper_1.default.getAllPasswords();
        console.log(result);
        res.send({
            message: "fetch all password successfull",
            result,
        });
    }),
    deletePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { title } = (_a = req.body) !== null && _a !== void 0 ? _a : "";
        const result = yield userHelper_1.default.deletePassword(title);
        res.send({
            message: "deleted successfully",
            result,
        });
    }),
};
exports.default = userController;
