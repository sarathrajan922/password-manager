"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./config/Database/connection"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const configKeys_1 = __importDefault(require("./config/configKeys"));
const app = (0, express_1.default)();
const port = configKeys_1.default.PORT || 3001;
const user_1 = __importDefault(require("./routes/user"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});
app.use("/api", user_1.default);
(0, connection_1.default)();
