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
    // const decryptedPass = decrypt(passwordData)
    // const obj = {
    //   iv: 'kjflk',
    //   password:'ljljflkj',
    //   title: passwordData.title,
    // };
    // console.log(decryptedPass)
    await PasswordModel.create(encryptedObj);
    return true;
  },
};

export default userHelper;
