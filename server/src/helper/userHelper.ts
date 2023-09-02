import { encrypt } from "../Services/credential_security";
import PasswordModel from "../config/Database/model/passwordModel";
import { PasswordInterface } from "../types/passwordInterface";

const userHelper = {
    addPassword: async(passwordData:PasswordInterface)=>{
        console.log(passwordData)
        const hashedpassword = encrypt(passwordData.password)
        console.log(hashedpassword)
        const result = await PasswordModel.create(passwordData)
        return {
            "hashedpassword": hashedpassword
        }
    }
}

export default userHelper