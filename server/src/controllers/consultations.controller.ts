import type { Request, Response } from "express";
import { consultationsService } from "../services/consultations.service";

export function getConsultations(_request: Request, response: Response) {
  response.status(200).json(consultationsService.getAll());
}
