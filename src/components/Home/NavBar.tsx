import { MenuIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function NavBar() {
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavBar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/inicio" ||
    location.pathname === "/dashboard/mis-empresas";

  if (hideNavBar) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="text-white items-center bg-black/50 fixed w-full z-10 backdrop-blur-xl">
      <div className="mx-auto max-w-4xl flex justify-between px-5 py-2 rounded-2xl">
        <div className="flex items-center basis-0 flex-grow">
          <p className="text-purple-400 font-bold text-xl">
            Vexi<span className="text-white">.</span>
          </p>
        </div>

        <nav className="hidden basis-0 justify-center lg:flex">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#">Perfil</a>
            </li>
          </ul>
        </nav>

        <button className="lg:hidden flex items-center justify-center pt-1">
          <MenuIcon size={30} className="hover:text-purple-400" />
        </button>

        <div className="hidden items-center basis-0 flex-grow justify-end lg:flex">
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer bg-green-600 px-3 py-1 rounded-lg ml-2 font-medium text-sm hover:bg-green-700"
            >
              Iniciar Sesión
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="cursor-pointer bg-red-600 px-3 py-1 rounded-lg ml-2 font-medium text-sm hover:bg-red-700"
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
      <BottomNavBar />
    </header>
  );
}

function BottomNavBar() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto w-full justify-center max-w-4xl flex px-5 py-2 rounded-2xl">
        <p className="text-sm text-center">
          Crea tu negocio digital de forma fácil y rápida
          <span className="text-purple-400"> aquí</span>.
        </p>
      </div>
    </footer>
  );
}

export default NavBar;
