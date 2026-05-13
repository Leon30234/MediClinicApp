import type { Appointment, Consultation, Doctor } from "../types";

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dra. Ana López",
    specialty: "Medicina general",
    room: "Consulta 101",
    availableDays: ["Lunes", "Miércoles", "Viernes"]
  },
  {
    id: 2,
    name: "Dr. Carlos Pérez",
    specialty: "Cardiología",
    room: "Consulta 204",
    availableDays: ["Martes", "Jueves"]
  },
  {
    id: 3,
    name: "Dra. Marta Ruiz",
    specialty: "Dermatología",
    room: "Consulta 305",
    availableDays: ["Lunes", "Jueves"]
  }
];

export let appointments: Appointment[] = [
  {
    id: 1,
    patientName: "Leon Gomez",
    doctorId: 1,
    doctorName: "Dra. Ana López",
    date: "2026-06-20",
    time: "10:30",
    reason: "Revisión general",
    status: "scheduled"
  }
];

export const consultations: Consultation[] = [
  {
    id: 1,
    patientName: "Leon Gomez",
    doctorName: "Dra. Ana López",
    date: "2026-06-10",
    diagnosis: "Consulta de revisión",
    notes: "Consulta de ejemplo para demostrar el flujo de datos de la API."
  }
];

export function setAppointments(nextAppointments: Appointment[]) {
  appointments = nextAppointments;
}
