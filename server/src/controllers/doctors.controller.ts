import type { Request, Response } from "express";
import { doctorsService } from "../services/doctors.service";

export function getDoctors(_request: Request, response: Response) {
  response.status(200).json(doctorsService.getAll());
}
