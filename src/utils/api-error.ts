export class APIError extends Error {
    
    readonly status!: number;
    readonly details!: unknown;
    
    constructor(status: number, message: string, details?: unknown){
        super(message);
        this.status = status;
        this.details = details;
        this.name = "APIError";

        Error.captureStackTrace(this, this.constructor);
    }
}


export const badRequest = (message: string, details?: unknown) => new APIError(400, message, details);
export const notFound = (message: string, details?: unknown) => new APIError(404, message, details);
export const internalServerError = (message = "Internal server error") => new APIError(500, message);
export const unauthorized = (message: string, details?: unknown) => new APIError(401, message, details);
export const forbidden = (message: string, details?: unknown) => new APIError(403, message, details);
export const conflict = (message: string, details?: unknown) => new APIError(409, message, details);