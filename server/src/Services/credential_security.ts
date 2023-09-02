import crypto, { Cipher } from "crypto";
import configKeys from "../config/configKeys";

export const encrypt = (password: string) => {
  const key = Buffer.from(configKeys.CRYPTO_SECRET, "utf8");
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  const encryptedPassword = Buffer.concat([
    cipher.update(Buffer.from(password, "utf8")),
    cipher.final(),
  ]);

  const encryptedData = Buffer.concat([iv, encryptedPassword]);

  return {
    iv: iv.toString("hex"),
    password: encryptedData.toString("hex"),
  };
};
