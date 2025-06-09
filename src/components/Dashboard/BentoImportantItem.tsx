import BentoGeneralItem from "./BentoGeneralItem";
import banner from "../../assets/images/bg.webp";

interface BentoImportantItemProps {
  className?: string;
}

const BentoImportantItem = ({ className }: BentoImportantItemProps) => {
  return (
    <BentoGeneralItem
      className={`${className} flex flex-col gap-4 justify-center p-6`}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <h2 className="text-4xl font-bold">
        Vexi{" "}
        <span className="bg-purple-500 text-white px-2 py-1 rounded-md">
          beta
        </span>{" "}
        launch
      </h2>
      <p className="text-white">
        Nueva versión de Vexi disponible para beta testers. Pronto estará
        disponible para todos.
      </p>
      <div className="flex gap-4">
        <button className="bg-purple-400 text-white px-4 py-2 rounded-md">
          Ver más
        </button>
      </div>
    </BentoGeneralItem>
  );
};

export default BentoImportantItem;
