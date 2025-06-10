import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");

      // TODO: Handle successful login (e.g., redirect, store token)
    } catch (error) {
      console.error("There was a problem with the login request:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-black to-violet-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg opacity-90 rounded-lg p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            ¡Bienvenido de nuevo!
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Inicia sesión para continuar utilizando Vexi
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="mt-4 text-center flex flex-col gap-2">
            <a
              href="#"
              className="text-sm text-violet-400 hover:text-violet-300"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <a
              href="/register"
              className="text-sm text-violet-400 hover:text-violet-300"
            >
              ¿No tienes una cuenta? Regístrate
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
