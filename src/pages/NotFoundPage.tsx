import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="rounded-2xl border bg-white p-8 text-center shadow-sm">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-3 text-slate-600">La página que buscas no existe.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white">
        Volver al inicio
      </Link>
    </section>
  );
}
