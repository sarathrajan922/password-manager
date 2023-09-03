import crypto, { Cipher } from "crypto";
import configKeys from "../config/configKeys";
import { EncrytionData } from "../types/encryptionDataInterface";

// export const encrypt = (password: string) => {
//   const key = Buffer.from(configKeys.CRYPTO_SECRET, "utf8");
//   const iv = crypto.randomBytes(16);
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

//   const encryptedPassword = Buffer.concat([
//     cipher.update(Buffer.from(password, "utf8")),
//     cipher.final(),
//   ]);

//   const encryptedData = Buffer.concat([iv, encryptedPassword]);

//   return {
//     iv: iv.toString("hex"),
//     password: encryptedData.toString("hex"),
//   };

// };

// export const decrypt = (encryption:EncrytionData)=>{
//     // const decipher = crypto.createDecipheriv(
//     //     "aes-256-cbc",
//     //  Buffer.from(configKeys.CRYPTO_SECRET),
//     //  Buffer.from(encryption.iv,"hex")
//     // );

//     // const decrptedPassword = Buffer.concat([
//     //     decipher.update(Buffer.from(encryption.password,"hex")),
//     //     decipher.final()
//     // ])
//     // return decrptedPassword.toString();

   
 
//     const key = Buffer.from(configKeys.CRYPTO_SECRET, "utf8");
//     const iv = Buffer.from(encryption.iv, "hex");
//     const encryptedData = Buffer.from(encryption.password, "hex");
//     const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  
//     let decryptedPassword = decipher.update(encryptedData);
//     decryptedPassword = Buffer.concat([decryptedPassword, decipher.final()]);
  
//     return decryptedPassword.toString("utf8");
// }


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
