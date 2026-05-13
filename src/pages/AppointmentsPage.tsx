import { AppointmentCard } from "../components/AppointmentCard";
import { AppointmentForm } from "../components/AppointmentForm";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { useAppointments } from "../hooks/useAppointments";
import { useDoctors } from "../hooks/useDoctors";

export function AppointmentsPage() {
  const appointmentsState = useAppointments();
  const doctorsState = useDoctors();

  if (appointmentsState.loading || doctorsState.loading) return <Loading />;

  if (appointmentsState.error) {
    return <ErrorMessage message={appointmentsState.error} onRetry={appointmentsState.retry} />;
  }

  if (doctorsState.error) {
    return <ErrorMessage message={doctorsState.error} onRetry={doctorsState.retry} />;
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <AppointmentForm
          doctors={doctorsState.doctors}
          onSubmit={appointmentsState.createAppointment}
        />

        <div className="mt-4 rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-600">Citas activas</p>
          <p className="text-3xl font-bold text-blue-700">{appointmentsState.scheduledCount}</p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-slate-900">Citas médicas</h1>
        <div className="mt-6 grid gap-4">
          {appointmentsState.appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onCancel={appointmentsState.cancelAppointment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
