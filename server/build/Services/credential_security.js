"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const configKeys_1 = __importDefault(require("../config/configKeys"));
const CRYPTO_SECRET = configKeys_1.default.CRYPTO_SECRET || 'pppppppppppppppppppppppppppppppp';
const encrypt = (password) => {
    const key = Buffer.from(CRYPTO_SECRET, "utf8");
    const iv = crypto_1.default.randomBytes(16);
    const cipher = crypto_1.default.createCipheriv("aes-256-cbc", key, iv);
    let encryptedPassword = cipher.update(password, "utf8", "hex");
    encryptedPassword += cipher.final("hex");
    return {
        iv: iv.toString("hex"),
        password: encryptedPassword,
    };
};
exports.encrypt = encrypt;
const decrypt = (encryptedPassHex, ivHex) => {
    try {
        const key = Buffer.from(CRYPTO_SECRET, "utf8");
        const iv = Buffer.from(ivHex, "hex");
        const encryptedData = Buffer.from(encryptedPassHex, "hex");
        const decipher = crypto_1.default.createDecipheriv("aes-256-cbc", key, iv);
        let decryptedPassword = decipher.update(encryptedData);
        decryptedPassword = Buffer.concat([decryptedPassword, decipher.final()]);
        return decryptedPassword.toString("utf8");
    }
    catch (error) {
        console.error("Decryption failed:", error);
        return null;
    }
};
exports.decrypt = decrypt;
