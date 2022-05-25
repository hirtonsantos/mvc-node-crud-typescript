import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userUpdateService from "../services/user/userUpdatePassword.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {

    const id = req.params.id
    const userUpdated = req.body

	  await userUpdateService(id, userUpdated);

    return res.status(201).json({ message: "User updated!" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
};

export default userUpdateController