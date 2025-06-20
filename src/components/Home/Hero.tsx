import macbook from "../../assets/images/macbook.webp";
import blur from "../../assets/images/blur.webp";
import { useUser } from "../../context/UserContext";

function Hero() {
  const { user } = useUser();

  return (
    <section className="text-white bg-black h-screen flex items-center relative px-3">
      <img
        src={blur}
        alt="blur"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="flex flex-col gap-4 items-center w-full">
        <h3 className="text-pink-400 text-2xl font-semibold">
          ¿Listo para emprender?
        </h3>
        <h1 className="font-semibold text-pretty text-5xl text-center lg:text-6xl md:text-5xl">
          Bienvenido a Vexi{" "}
          <span className="text-purple-400">
            {user?.username
              ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
              : "Invitado"}
          </span>
          .
        </h1>

        <div className="items-center py-7 hidden lg:flex lg:max-w-3xl">
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
