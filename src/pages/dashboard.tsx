import { Outlet } from "react-router-dom";
import NavBar from "../components/Dashboard/NavBar";
import ProtectedRoute from "../components/ProtectedRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <NavBar />
      <div className="pt-16 px-6 text-white">
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
