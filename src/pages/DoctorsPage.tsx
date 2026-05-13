import { DoctorCard } from "../components/DoctorCard";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { useDoctors } from "../hooks/useDoctors";

export function DoctorsPage() {
  const { doctors, loading, error, retry } = useDoctors();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={retry} />;

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">Doctores</h1>
      <p className="mt-2 text-slate-600">Listado de profesionales disponibles en la clínica.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
