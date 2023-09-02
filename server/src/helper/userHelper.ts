import PasswordModel from "../config/Database/model/passwordModel";

interface PasswordInterface {
    password: string;
    iv: string;
    title: string;

}
const userHelper = {
    addPassword: async(passwordData:PasswordInterface)=>{
        console.log(passwordData)
        const result = await PasswordModel.create(passwordData)
        return result
    }
}

export default userHelper