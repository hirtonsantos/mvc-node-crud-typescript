import { Request, Response } from "express";
import userUpdatePasswordService from "../services/userUpdatePassword.service";

const userUpdatePasswordController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;
    const { password } = req.body;

    if (!password) {
      throw new Error("No password informed");
    }

    const user = await userUpdatePasswordService(email, password);

    return res.status(201).json({ message: "Password updated!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userUpdatePasswordController