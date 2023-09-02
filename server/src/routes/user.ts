import  express,{Request,Response}  from "express";
const userRouter = express.Router();
import userController from "../controller/userController";


userRouter.get('/',userController.demo)
userRouter.post('/add-password',userController.addPassword)

export default userRouter;
