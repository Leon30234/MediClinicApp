import { Router } from "express";
import { getDoctors } from "../controllers/doctors.controller";

export const doctorsRouter = Router();

doctorsRouter.get("/", getDoctors);
