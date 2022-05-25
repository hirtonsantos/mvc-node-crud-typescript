import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userListOneService from "../services/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id;

    const user = await userListOneService(id);

    return res.status(200).send(user);
  } catch (error) {
    if(error instanceof AppError){
      handleError(error, res)
    }
  }
};

export default userListOneController;
