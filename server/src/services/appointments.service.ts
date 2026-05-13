import { appointments, setAppointments } from "../config/data";
import type { AppointmentPayload } from "../types";
import { doctorsService } from "./doctors.service";

export const appointmentsService = {
  getAll() {
    return appointments;
  },

  create(payload: AppointmentPayload) {
    const doctor = doctorsService.findById(payload.doctorId);

    if (!doctor) {
      throw new Error("Doctor no encontrado");
    }

    const newAppointment = {
      id: Date.now(),
      patientName: payload.patientName,
      doctorId: doctor.id,
      doctorName: doctor.name,
      date: payload.date,
      time: payload.time,
      reason: payload.reason,
      status: "scheduled" as const
    };

    setAppointments([...appointments, newAppointment]);

    return newAppointment;
  },

  update(id: number, payload: Partial<AppointmentPayload>) {
    const appointment = appointments.find((item) => item.id === id);

    if (!appointment) {
      return null;
    }

    let doctorName = appointment.doctorName;
    let doctorId = appointment.doctorId;

    if (payload.doctorId) {
      const doctor = doctorsService.findById(payload.doctorId);

      if (!doctor) {
        throw new Error("Doctor no encontrado");
      }

      doctorName = doctor.name;
      doctorId = doctor.id;
    }

    const updated = {
      ...appointment,
      ...payload,
      doctorId,
      doctorName
    };

    setAppointments(
      appointments.map((item) => (item.id === id ? updated : item))
    );

    return updated;
  },

  cancel(id: number) {
    const appointment = appointments.find((item) => item.id === id);

    if (!appointment) {
      return null;
    }

    const updated = {
      ...appointment,
      status: "cancelled" as const
    };

    setAppointments(
      appointments.map((item) => (item.id === id ? updated : item))
    );

    return updated;
  }
};
