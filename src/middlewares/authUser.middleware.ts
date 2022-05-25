import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { AppError, handleError } from "../errors/appError";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
    try {

        const token = req.headers.authorization

        if (!token) {
            throw new AppError(401, "No token found")
        }

        jwt.verify(token as string, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            if (err) {
                throw new AppError(401, "Invalid Token")
            }
            req.userEmail = decoded.email
            next()
        })
        
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }
}
