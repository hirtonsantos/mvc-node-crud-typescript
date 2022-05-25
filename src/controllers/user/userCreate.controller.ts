import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../services/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const newUser = await userCreateService({ name, email, password, age });

    return res.status(201).send(newUser);
  } catch (error) {

    if (error instanceof AppError) {
        handleError(error, res)
    }
}
};


export default userCreateController