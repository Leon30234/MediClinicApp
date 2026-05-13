import { Router } from "express";
import { getConsultations } from "../controllers/consultations.controller";

export const consultationsRouter = Router();

consultationsRouter.get("/", getConsultations);
