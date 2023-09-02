import { encrypt } from "../Services/credential_security";
import PasswordModel from "../config/Database/model/passwordModel";
import { PasswordInterface } from "../types/passwordInterface";

const userHelper = {
    addPassword: async(passwordData:PasswordInterface)=>{
        console.log(passwordData)
        const {iv,password}= encrypt(passwordData.password)
          const obj ={
            iv,
            password,
            title: passwordData.title
          }
       await PasswordModel.create(obj)
        return true
    }
}

export default userHelper