import { decrypt, encrypt } from "../Services/credential_security";
import PasswordModel from "../config/Database/model/passwordModel";
import { PasswordInterface } from "../types/passwordInterface";

const userHelper = {
  addPassword: async (passwordData: PasswordInterface) => {
    const { iv, password } = encrypt(passwordData.password);
    const encryptedObj = {
      iv,
      password,
      title : passwordData.title 
    }
    await PasswordModel.create(encryptedObj);
    return true;
  },

  getAllPasswords: async ()=>{
    const data = await PasswordModel.find();
    return data
  }
};

export default userHelper;
