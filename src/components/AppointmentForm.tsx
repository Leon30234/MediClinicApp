import { FormEvent, useState } from "react";
import type { AppointmentPayload, Doctor } from "../types";
import { isRequired } from "../utils/validators";

interface AppointmentFormProps {
  doctors: Doctor[];
  onSubmit: (payload: AppointmentPayload) => Promise<void>;
}

export function AppointmentForm({ doctors, onSubmit }: AppointmentFormProps) {
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!isRequired(patientName) || !doctorId || !date || !time || !isRequired(reason)) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    await onSubmit({
      patientName,
      doctorId: Number(doctorId),
      date,
      time,
      reason
    });

    setPatientName("");
    setDoctorId("");
    setDate("");
    setTime("");
    setReason("");
    setMessage("Cita creada correctamente.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-900">Nueva cita médica</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Paciente
          <input
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2"
            placeholder="Nombre del paciente"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Doctor
          <select
            value={doctorId}
            onChange={(event) => setDoctorId(event.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          >
            <option value="">Selecciona un doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Fecha
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Hora
          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Motivo de la cita
        <textarea
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="Describe brevemente el motivo"
        />
      </label>

      {message && <p className="mt-3 text-sm text-blue-700">{message}</p>}

      <button className="mt-4 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
        Crear cita
      </button>
    </form>
  );
}
