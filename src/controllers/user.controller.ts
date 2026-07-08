import { Request, Response } from "express";
import { findAllUsers  as findAllUsersService } from "../services/user.service.js"

export async function findAllUsers(req: Request, res: Response){
    await findAllUsersService();
}