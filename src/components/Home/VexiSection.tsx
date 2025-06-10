import Card from "./Card";
import Wrap from "./Wrap";

function VexiSection() {
  return (
    <section className="bg-gradient-to-b from-black to-secondary h-full text-white px-6">
      <div className="flex flex-col lg:pt-50 h-full max-w-4xl mx-auto gap-6">
        <h2 className="text-5xl font-bold">¿Porque Vexi?</h2>
        <p className="text-lg">
          Elige Vexi porque es la forma más fácil y accesible para que tu pyme
          venda en línea sin complicaciones. Nuestra plataforma te permite crear
          tu propia tienda virtual, gestionar productos y recibir pagos seguros,
          todo desde un panel intuitivo y adaptable a celulares. Sin costos
          excesivos ni conocimientos técnicos, Vexi te ayuda a digitalizar tu
          negocio y llegar a más clientes en menos tiempo.
        </p>
        <Wrap className="mb-40">
          <Card
            title="Fácil de usar, sin conocimientos técnicos"
            description="Vexi está diseñada para que cualquier pyme pueda crear y gestionar su tienda online sin necesidad de saber programar. Su panel de administración es intuitivo y simple."
          />
          <Card
            title="Fácil de usar, sin conocimientos técnicos"
            description="Vexi está diseñada para que cualquier pyme pueda crear y gestionar su tienda online sin necesidad de saber programar. Su panel de administración es intuitivo y simple."
          />
          <Card
            title="Fácil de usar, sin conocimientos técnicos"
            description="Vexi está diseñada para que cualquier pyme pueda crear y gestionar su tienda online sin necesidad de saber programar. Su panel de administración es intuitivo y simple."
          />
        </Wrap>
      </div>
    </section>
  );
}

export default VexiSection;
