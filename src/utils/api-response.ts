import { Response } from "express";

interface SuccessPayload<T> {
    success: boolean;
    data: T;
    message?: string
}



export function sendSuccess<T>(res: Response, data: T, statusCode: number, message?: string): void {
    const body: SuccessPayload<T> = {
        success: true,
        data: data,
        ...( message && { message })
    }

    res.status(statusCode).json(body);

}