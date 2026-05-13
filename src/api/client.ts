import type { Appointment, AppointmentPayload, Consultation, Doctor } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Error al conectar con la API");
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  getDoctors: () => request<Doctor[]>("/api/v1/doctors"),

  getAppointments: () => request<Appointment[]>("/api/v1/appointments"),

  createAppointment: (payload: AppointmentPayload) =>
    request<Appointment>("/api/v1/appointments", {
      method: "POST",
      body: JSON.stringify(payload)
    }),

  updateAppointment: (id: number, payload: Partial<AppointmentPayload>) =>
    request<Appointment>(`/api/v1/appointments/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload)
    }),

  deleteAppointment: (id: number) =>
    request<{ message: string }>(`/api/v1/appointments/${id}`, {
      method: "DELETE"
    }),

  getConsultations: () => request<Consultation[]>("/api/v1/consultations")
};
