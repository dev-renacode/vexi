import { Outlet } from "react-router-dom";
import NavBar from "../components/Dashboard/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="pt-16 px-6 text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
