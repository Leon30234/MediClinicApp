import { Router } from "express";
import {
  createAppointment,
  deleteAppointment,
  getAppointments,
  updateAppointment
} from "../controllers/appointments.controller";

export const appointmentsRouter = Router();

appointmentsRouter.get("/", getAppointments);
appointmentsRouter.post("/", createAppointment);
appointmentsRouter.patch("/:id", updateAppointment);
appointmentsRouter.delete("/:id", deleteAppointment);
