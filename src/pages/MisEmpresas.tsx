import EmpresaCard from "../components/Dashboard/EmpresaCard";
import Wrap from "../components/Home/Wrap";

const MisEmpresas = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-10 h-screen lg:pl-64">
      <h2 className="text-3xl font-bold">Mis empresas 🧩</h2>
      <p className="text-gray-400">
        En esta sección podrás ver tus empresas y también crear nuevas.
      </p>

      <div className="grid grid-cols-12 gap-4 mt-8">
        <Wrap>
          <EmpresaCard />
        </Wrap>
      </div>
    </section>
  );
};

export default MisEmpresas;
