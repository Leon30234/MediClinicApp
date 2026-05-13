import type { Doctor } from "../types";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
      <p className="mt-1 text-blue-700">{doctor.specialty}</p>
      <p className="mt-3 text-sm text-slate-600">Consulta: {doctor.room}</p>
      <p className="mt-2 text-sm text-slate-600">
        Días disponibles: {doctor.availableDays.join(", ")}
      </p>
    </article>
  );
}
