import { useEffect, useState } from "react";
import { apiClient } from "../api/client";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import type { Consultation } from "../types";

export function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadConsultations() {
    try {
      setLoading(true);
      setError("");
      const data = await apiClient.getConsultations();
      setConsultations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar consultas");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadConsultations();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={loadConsultations} />;

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900">Consultas médicas</h1>
      <p className="mt-2 text-slate-600">Historial de consultas de ejemplo.</p>

      <div className="mt-6 grid gap-4">
        {consultations.map((consultation) => (
          <article key={consultation.id} className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">{consultation.patientName}</h3>
            <p className="text-sm text-slate-600">
              {consultation.doctorName} · {consultation.date}
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              Diagnóstico: {consultation.diagnosis}
            </p>
            <p className="mt-2 text-sm text-slate-600">{consultation.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
