import type { Request, Response } from "express";
import { appointmentsService } from "../services/appointments.service";

function isValidAppointmentBody(body: Record<string, unknown>) {
  return (
    typeof body.patientName === "string" &&
    typeof body.doctorId === "number" &&
    typeof body.date === "string" &&
    typeof body.time === "string" &&
    typeof body.reason === "string"
  );
}

export function getAppointments(_request: Request, response: Response) {
  response.status(200).json(appointmentsService.getAll());
}

export function createAppointment(request: Request, response: Response) {
  try {
    if (!isValidAppointmentBody(request.body)) {
      response.status(400).json({ message: "Datos de cita no válidos" });
      return;
    }

    const created = appointmentsService.create(request.body);
    response.status(201).json(created);
  } catch (error) {
    response.status(400).json({
      message: error instanceof Error ? error.message : "Error al crear la cita"
    });
  }
}

export function updateAppointment(request: Request, response: Response) {
  try {
    const id = Number(request.params.id);
    const updated = appointmentsService.update(id, request.body);

    if (!updated) {
      response.status(404).json({ message: "Cita no encontrada" });
      return;
    }

    response.status(200).json(updated);
  } catch (error) {
    response.status(400).json({
      message: error instanceof Error ? error.message : "Error al actualizar la cita"
    });
  }
}

export function deleteAppointment(request: Request, response: Response) {
  const id = Number(request.params.id);
  const cancelled = appointmentsService.cancel(id);

  if (!cancelled) {
    response.status(404).json({ message: "Cita no encontrada" });
    return;
  }

  response.status(200).json({ message: "Cita cancelada correctamente" });
}
