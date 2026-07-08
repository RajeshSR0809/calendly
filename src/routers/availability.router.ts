import { Router } from "express";
import { listRules } from "../controllers/availability.controller.js";

const availabilityRouter:  Router = Router();


availabilityRouter.get("/rules", listRules);

export default availabilityRouter;