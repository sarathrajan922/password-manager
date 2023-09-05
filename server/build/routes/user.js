"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const userController_1 = __importDefault(require("../controller/userController"));
userRouter.get('/', userController_1.default.demo);
userRouter.post('/add-password', userController_1.default.addPassword);
userRouter.post('/show-password', userController_1.default.showPassword);
userRouter.get('/get-all-passwords', userController_1.default.getAllPasswords);
userRouter.post('/delete-password', userController_1.default.deletePassword);
exports.default = userRouter;
