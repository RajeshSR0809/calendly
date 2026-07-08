import { Router } from "express";
import { list } from "../controllers/event-type.controller.js";

const eventTypeRouter:  Router = Router();


eventTypeRouter.get('/', list);
export default eventTypeRouter;