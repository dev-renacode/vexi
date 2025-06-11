import { useUser } from "../context/UserContext";

const LoginLogoutBtn = ({ navigate }: { navigate: (path: string) => void }) => {
  const { user } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return !user ? (
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
  );
};

export default LoginLogoutBtn;
