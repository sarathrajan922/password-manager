import crypto, { Cipher } from "crypto";
import configKeys from "../config/configKeys";

export const encrypt = (password: string) => {
  const key = Buffer.from(configKeys.CRYPTO_SECRET, "utf8");
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  let encryptedPassword = cipher.update(password, "utf8", "hex");
  encryptedPassword += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    password: encryptedPassword,
  };
};

export const decrypt = (encryptedPassHex: string, ivHex: string) => {
  try {
    const key = Buffer.from(configKeys.CRYPTO_SECRET, "utf8");
    const iv = Buffer.from(ivHex, "hex");
    const encryptedData = Buffer.from(encryptedPassHex, "hex");
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

    let decryptedPassword = decipher.update(encryptedData);
    decryptedPassword = Buffer.concat([decryptedPassword, decipher.final()]);

    return decryptedPassword.toString("utf8");
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};
