import { Request, Response } from "express";
import userListOneService from "../services/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id;

    const user = await userListOneService(id);

    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userListOneController;
