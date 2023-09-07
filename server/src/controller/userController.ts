import { Request, Response } from "express";
import userHelper from "../helper/userHelper";
import { decrypt } from "../Services/credential_security";
const userController = {
  demo: (req: Request, res: Response) => {
    res.send("api reached in controller");
  },

  addPassword: async (req: Request, res: Response) => {
    const result = userHelper.addPassword(req.body);
    if ((await result) === "titleExist") {
      res.send({
        message: "title already exists",
      });
    } else {
      res.send({
        message: "password added succesfully",
      });
    }
  },

  showPassword: (req: Request, res: Response) => {
    const encryptedPassHex = req.body.password ?? "";
    const ivHex = req.body.iv ?? "";
    const result = decrypt(encryptedPassHex, ivHex);
    res.send({
      message: "password decryted succesfully",
      password: result,
    });
  },

  getAllPasswords: async (req: Request, res: Response) => {
    const result = await userHelper.getAllPasswords();
    res.send({
      message: "fetch all password successfull",
      result,
    });
  },

  deletePassword: async (req: Request, res: Response) => {
    const { title } = req.body ?? "";
    const result = await userHelper.deletePassword(title);
    res.send({
      message: "deleted successfully",
      result,
    });
  },
};

export default userController;
