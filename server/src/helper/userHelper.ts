import { encrypt } from "../Services/credential_security";
import PasswordModel from "../config/Database/model/passwordModel";
import { PasswordInterface } from "../types/passwordInterface";

const userHelper = {
  addPassword: async (passwordData: PasswordInterface) => {
    const { iv, password } = encrypt(passwordData.password);
    const obj = {
      iv,
      password,
      title: passwordData.title,
    };
    console.log(obj)
    await PasswordModel.create(obj);
    return true;
  },
};

export default userHelper;
