import { Request,Response } from "express"
import userHelper from "../helper/userHelper"
import { decrypt } from "../Services/credential_security"
const userController = {


    demo: (req:Request,res:Response)=>{
        res.send('api reached in controller')
    },

    addPassword:(req:Request,res:Response)=>{
        const result = userHelper.addPassword(req.body)
        res.send({
            message: 'password added succesfully'
        })
    },

    showPassword: (req:Request,res:Response)=>{
        const encryptedPassHex = req.body.password ?? ''
        const ivHex = req.body.iv ?? ''
        const result = decrypt(encryptedPassHex,ivHex)
        console.log(result)
        res.send({
            message: "password decryted succesfuly",
            password: result
        })
    }
}


export default userController;