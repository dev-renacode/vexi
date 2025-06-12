import { useEffect, useState } from "react";
import CreateEmpresaCard from "../components/Dashboard/CreateEmpresaCard";
import EmpresaCard from "../components/Dashboard/EmpresaCard";
import Wrap from "../components/Home/Wrap";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

interface Empresa {
  id: string;
  nombre: string;
  descripcion: string;
  logo: string;
  creationDate: string;
}

const MisEmpresas = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const { user } = useUser();

  const fetchEmpresas = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/empresas?usuarioId=${user?.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch empresas");
      }
      const data = await response.json();
      setEmpresas(data.companies);
    } catch (error) {
      console.error("Error fetching empresas:", error);
    }
  };

  useEffect(() => {
    fetchEmpresas();
  }, [user]);

  return (
    <section className="w-full max-w-7xl mx-auto pt-10 h-screen lg:pl-64">
      <h2 className="text-3xl font-bold">Mis empresas 🧩</h2>
      <p className="text-gray-400">
        En esta sección podrás ver tus empresas y también crear nuevas.
      </p>

      <div>
        <Wrap>
          <CreateEmpresaCard onEmpresaCreated={fetchEmpresas} />
          {empresas.map((empresa) => (
            <Link key={empresa.id} to={`/dashboard/empresa/${empresa.id}`}>
              <EmpresaCard
                nombre={empresa.nombre}
                descripcion={empresa.descripcion}
                logo={empresa.logo}
                creationDate={empresa.creationDate}
              />
            </Link>
          ))}
        </Wrap>
      </div>
    </section>
  );
};

export default MisEmpresas;
