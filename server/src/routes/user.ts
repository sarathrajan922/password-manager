import  express,{Request,Response}  from "express";
const userRouter = express.Router();
import userController from "../controller/userController";


userRouter.get('/',userController.demo)
userRouter.post('/add-password',userController.addPassword);
userRouter.post('/show-password',userController.showPassword);
userRouter.get('/get-all-passwords',userController.getAllPasswords);
userRouter.post('/delete-password',userController.deletePassword);
userRouter.get('/paginated-data',userController.getPasswords)

export default userRouter;
