import PasswordModel from "../config/Database/model/passwordModel";
import { PasswordInterface } from "../types/passwordInterface";

const userHelper = {
    addPassword: async(passwordData:PasswordInterface)=>{
        console.log(passwordData)
        const result = await PasswordModel.create(passwordData)
        return result
    }
}

export default userHelper