export interface User {
  id: number;
  name: string;
  email: string;
  role: "patient" | "admin";
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  room: string;
  availableDays: string[];
}

export interface Appointment {
  id: number;
  patientName: string;
  doctorId: number;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
  status: "scheduled" | "cancelled";
}

export interface Consultation {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  diagnosis: string;
  notes: string;
}

export interface AppointmentPayload {
  patientName: string;
  doctorId: number;
  date: string;
  time: string;
  reason: string;
}
