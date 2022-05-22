import { Request, Response } from "express";
import userDeleteSelfService from "../services/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {

    const id = req.params.id;
    
    await userDeleteSelfService(id);

    return res.status(204).json();
    
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userDeleteSelfController