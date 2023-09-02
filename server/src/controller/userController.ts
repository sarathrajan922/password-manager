import { Request,Response } from "express"

const userController = {


    demo: (req:Request,res:Response)=>{
        res.send('api reached in controller')
    },

    addPassword: (req:Request,res:Response)=>{
        console.log(req.body)
        res.send('success')
    }
}


export default userController;