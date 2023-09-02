import { Request,Response } from "express"
import userHelper from "../helper/userHelper"
const userController = {


    demo: (req:Request,res:Response)=>{
        res.send('api reached in controller')
    },

    addPassword:(req:Request,res:Response)=>{
        const result = userHelper.addPassword(req.body)
        res.send({
            message: 'password added succesfully'
        })
    }
}


export default userController;