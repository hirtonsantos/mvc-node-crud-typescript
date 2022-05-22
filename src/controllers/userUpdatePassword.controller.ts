import { Request, Response } from "express";
import userUpdateService from "../services/userUpdatePassword.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {

    const id = req.params.id
    const userUpdated = req.body

	  await userUpdateService(id, userUpdated);

    return res.status(201).json({ message: "User updated!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userUpdateController