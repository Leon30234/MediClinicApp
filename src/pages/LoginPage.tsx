import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isValidEmail } from "../utils/validators";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("paciente@demo.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!isValidEmail(email) || password.length < 4) {
      setError("Introduce un email válido y una contraseña de mínimo 4 caracteres.");
      return;
    }

    const success = login(email, password);

    if (success) {
      navigate("/");
      return;
    }

    setError("No se pudo iniciar sesión.");
  }

  return (
    <section className="mx-auto max-w-md rounded-2xl border bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold text-slate-900">Acceso</h1>
      <p className="mt-2 text-slate-600">Login simulado para probar Context API.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white">
          Entrar
        </button>
      </form>
    </section>
  );
}
