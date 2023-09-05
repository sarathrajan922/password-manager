"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const passwordShema = new mongoose_1.Schema({
    password: {
        type: String,
        required: [true, 'please provide a password']
    },
    iv: {
        type: String,
        required: [true, 'please check you iv']
    },
    title: {
        type: String,
        required: [true, 'please provide a title']
    }
});
const PasswordModel = (0, mongoose_1.model)('Password', passwordShema, 'passwords');
exports.default = PasswordModel;
