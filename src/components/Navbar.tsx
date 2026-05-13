import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { user, logout } = useAuth();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white"
      : "rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100";

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="text-xl font-bold text-blue-700">
          MediClinic
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/doctors" className={linkClass}>Doctores</NavLink>
          <NavLink to="/appointments" className={linkClass}>Citas</NavLink>
          <NavLink to="/consultations" className={linkClass}>Consultas</NavLink>
          {user ? (
            <button onClick={logout} className="rounded-lg border px-3 py-2 text-sm">
              Salir
            </button>
          ) : (
            <NavLink to="/login" className={linkClass}>Login</NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
