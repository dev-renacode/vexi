import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  if (!user.isCompany) {
    return (
      <div className="text-white">
        No tienes permisos para acceder a esta página
      </div>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
