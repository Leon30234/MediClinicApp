import type { Appointment } from "../types";

interface AppointmentCardProps {
  appointment: Appointment;
  onCancel: (id: number) => void;
}

export function AppointmentCard({ appointment, onCancel }: AppointmentCardProps) {
  const isCancelled = appointment.status === "cancelled";

  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{appointment.doctorName}</h3>
          <p className="text-sm text-slate-600">Paciente: {appointment.patientName}</p>
          <p className="mt-2 text-sm text-slate-700">
            {appointment.date} a las {appointment.time}
          </p>
          <p className="mt-2 text-sm text-slate-600">Motivo: {appointment.reason}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className={`rounded-full px-3 py-1 text-center text-xs font-semibold ${
            isCancelled ? "bg-slate-100 text-slate-600" : "bg-green-100 text-green-700"
          }`}>
            {isCancelled ? "Cancelada" : "Programada"}
          </span>

          {!isCancelled && (
            <button
              onClick={() => onCancel(appointment.id)}
              className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-700 hover:bg-red-50"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
