import { Response, Request, NextFunction } from "express";
import { APIError } from "../utils/api-error.js";
import { sendError } from "../utils/api-response.js";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof APIError){
        sendError(res, error.details, error.status, error.message);
        return;
    }
    else {
        sendError(res, null, 500, "Something went wrong", error.stack)
    }

}