import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/inicio" ||
    location.pathname === "/dashboard/mis-empresas";

  if (hideNavBar) return null;

  return (
    <header className="text-white items-center bg-black/50 fixed w-full z-10 backdrop-blur-xl">
      <div className="mx-auto max-w-4xl flex justify-between px-5 py-2 rounded-2xl">
        <div className="flex items-center basis-0 flex-grow">
          <p className="text-purple-400 font-bold text-xl">
            Vexi<span className="text-white">.</span>
          </p>
        </div>

        <nav className="flex basis-0 justify-center">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Perfil</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center basis-0 flex-grow justify-end">
          <button className="bg-purple-400 px-3 py-1 rounded-lg ml-2 font-medium text-sm">
            Iniciar Sesión
          </button>
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
        <p className="text-sm">
          Crea tu negocio digital de forma fácil y rápida
          <span className="text-purple-400"> aquí</span>.
        </p>
      </div>
    </footer>
  );
}

export default NavBar;
