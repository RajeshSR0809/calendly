import { Response } from "express";
import { NODE_ENV } from "../config/env.js";

interface SuccessPayload<T> {
    success: boolean;
    data: T; // data to be send to the client
    message?: string;
    
}


interface ErrorPayload<T> extends SuccessPayload<T> {
    details?: unknown; // other info apart from data, to be send to the client, may be like sta
}


export function sendSuccess<T>(res: Response, data: T, statusCode: number=200, message?: string): void {
    const body: SuccessPayload<T> = {
        success: true,
        data: data,
        ...( message && { message })
    }

    res.status(statusCode).json(body);

}




export function sendError<T>(res: Response, data: T, statusCode: number, message?: string, details?: unknown): void {
    const body: ErrorPayload<T> = {
        success: false,
        data: data,
        ...( message && { message }),
        ...( NODE_ENV === 'development' && { details })
    }
    res.status(statusCode).json(body);
    
}