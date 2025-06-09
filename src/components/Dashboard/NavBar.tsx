import { Building2Icon, HomeIcon } from "lucide-react";
import BellIcon from "../../assets/icons/BellIcon.svg";
import NutIcon from "../../assets/icons/NutIcon.svg";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const buttonClass =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 relative";

  return (
    <>
      <header className="text-white bg-navbar flex justify-between items-center h-16 px-7 border-b-1 border-gray-700 fixed w-full z-10">
        <div>
          <p className="text-purple-400 font-bold text-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-400 from-purple-600">
              Vexi Empresas
            </span>
          </p>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                type="text"
                placeholder="Buscar..."
              />
            </div>
            <button className={buttonClass}>
              <img src={BellIcon} alt="BellIcon" />
            </button>
            <button className={buttonClass}>
              <img src={NutIcon} alt="NutIcon" />
            </button>
          </ul>
        </nav>
      </header>
      <SideBar />
    </>
  );
};

const SideBar = () => {
  const location = useLocation();

  return (
    <section className="fixed top-0 left-0 w-64 h-screen bg-sidebar border-r border-gray-700 z-0 text-gray-400">
      <nav className="flex pt-16">
        <ul className="w-full flex flex-col gap-1 mt-5">
          <SideBarItem
            icon={<HomeIcon size={24} className="hover:text-purple-400" />}
            text="Inicio"
            href="/dashboard"
            isSelected={location.pathname === "/dashboard"}
          />
          <SideBarItem
            icon={<Building2Icon size={24} className="hover:text-purple-400" />}
            text="Mis Empresas"
            href="/dashboard/mis-empresas"
            isSelected={location.pathname === "/dashboard/mis-empresas"}
          />
        </ul>
      </nav>
    </section>
  );
};

interface SideBarItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  isSelected: boolean;
}

const SideBarItem = ({ icon, text, href, isSelected }: SideBarItemProps) => {
  return (
    <li className="mx-2">
      <Link
        to={href}
        className={`flex items-center gap-2 rounded-lg w-full py-3 px-4 border-transparent border-2 transition-all duration-200 ${
          isSelected
            ? "bg-purple-500/50 text-purple-400 hover:border-purple-400/20"
            : ""
        }`}
      >
        {icon}
        {text}
      </Link>
    </li>
  );
};

export default NavBar;
