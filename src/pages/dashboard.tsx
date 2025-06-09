import { Outlet } from "react-router-dom";
import NavBar from "../components/Dashboard/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="pt-16 pl-65 text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
