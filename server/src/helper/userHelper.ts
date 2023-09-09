import { decrypt, encrypt } from "../Services/credential_security";
import PasswordModel from "../config/Database/model/passwordModel";
import { PasswordInterface } from "../types/passwordInterface";

const userHelper = {
  addPassword: async (passwordData: PasswordInterface) => {
    const checkTitleExist = await PasswordModel.findOne({
      title: passwordData.title,
    });
    if (!checkTitleExist) {
      const { iv, password } = encrypt(passwordData.password);
      const encryptedObj = {
        iv,
        password,
        title: passwordData.title,
      };
      await PasswordModel.create(encryptedObj);
      return "success";
    } else {
      return "titleExist";
    }
  },

  getAllPasswords: async () => {
    const data = await PasswordModel.find();
    return data;
  },

  deletePassword: async (title: string) => {
    const result = await PasswordModel.findOneAndDelete({ title: title });
    return result;
  },

  getAllPassword : async(limit:Number,offSet:Number)=>{
    const result = await PasswordModel.find().skip(offSet).limit(limit).sort({ createdAt: -1 })
    return result;
  }
};

export default userHelper;
