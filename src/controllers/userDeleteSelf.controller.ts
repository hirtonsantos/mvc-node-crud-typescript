import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import userDeleteSelfService from "../services/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {

    const id = req.params.id;
    
    await userDeleteSelfService(id);

    return res.status(204).json();
    
  } catch (error) {

    if (error instanceof AppError) {
        handleError(error, res)
    }
}
};

export default userDeleteSelfController