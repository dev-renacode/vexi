import Bento from "../components/Dashboard/Bento";

const Inicio = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-10 h-screen lg:pl-64">
      <div className="mb-5 md:pl-6">
        <h2 className="text-3xl font-bold">¡Bienvenido de vuelta! 👋</h2>
        <p className=" text-gray-400">
          Esta es la sección de inicio, aquí podrás ver novedades de Vexi y
          nuevas actualizaciones.
        </p>
      </div>
      <Bento />
    </section>
  );
};

export default Inicio;
