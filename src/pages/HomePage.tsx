import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function HomePage() {
  const { user } = useAuth();

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase text-blue-700">Proyecto fullstack</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        MediClinic App
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Aplicación para gestionar doctores, citas médicas y consultas de una clínica pequeña.
        El frontend está creado con React, TypeScript y Tailwind. El backend está creado con
        Express y organizado por capas.
      </p>

      {user && (
        <p className="mt-4 rounded-xl bg-blue-50 p-4 text-blue-700">
          Sesión iniciada como {user.name}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/appointments" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">
          Gestionar citas
        </Link>
        <Link to="/doctors" className="rounded-lg border px-5 py-3 font-medium text-slate-700">
          Ver doctores
        </Link>
      </div>
    </section>
  );
}
