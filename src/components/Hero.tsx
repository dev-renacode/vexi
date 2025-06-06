import macbook from "../assets/images/macbook.webp";
import blur from "../assets/images/blur.webp";

function Hero() {
  return (
    <section className="text-white bg-black h-screen flex relative pt-16">
      <img
        src={blur}
        alt="blur"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="flex flex-col gap-3 items-center w-full  pt-7">
        <h3 className="text-pink-400 text-2xl font-semibold">
          ¿Listo para emprender?
        </h3>
        <h1 className="font-semibold text-4xl lg:text-6xl md:text-5xl">
          Bienvenido a Vexi <span className="text-purple-400">Renato</span>.
        </h1>

        <div className="items-center py-7 hidden lg:flex max-w-4xl md:max-w-md">
          <img src={macbook} alt="macbook" className="w-full h-full" />
        </div>
        <p className="max-w-2xl font-light text-center">
          Vexi, es una empresa creada por estudiantes para{" "}
          <span className="text-purple-400">Pequeñas y medianas empresas</span>,
          con el fin de dar <span className="text-yellow-400">visibilidad</span>{" "}
          a las PYMES digitalmente.
        </p>
        <button className="cursor-pointer bg-purple-400 px-4 py-2 rounded-full ml-2 font-medium text-lg">
          Aprende más
        </button>
      </div>
    </section>
  );
}

export default Hero;
