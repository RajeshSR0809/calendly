import {NextFunction, Request, Response} from "express";
import z from "zod"
import { badRequest } from "../utils/api-error.js";


export const validate = (schema: z.ZodType) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const body = req.body;

        if(!body){
            throw badRequest("Schema validation failed", "body is mandatory")
        }

        const validationResult = schema.safeParse(body);

        if(body &&  validationResult.success){
            next();
        }
        else {
            throw badRequest("Schema validation failed", validationResult.error)
        }
    }
}