import { PlusIcon, XIcon } from "lucide-react";
import React from "react";

interface ModalCardProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
}

const ModalCard: React.FC<ModalCardProps> = ({
  setIsOpen,
  handleImageChange,
  selectedImage,
  setSelectedImage,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la creación de la empresa
  };

  return (
    <div
      className={`$ {
        isOpen ? "flex" : "hidden"
      } bg-black/60 fixed top-0 left-0 w-full h-full z-50 justify-center items-center`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="bg-secondary w-150 h-auto pb-30 flex flex-col rounded-lg">
        <div className="flex items-center justify-end p-7">
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <XIcon size={30} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center pb-6">
          <h1 className="text-2xl font-bold">Crear empresa</h1>
          <p className="text-gray-400">
            Crea una nueva empresa para empezar a trabajar.
          </p>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 px-7"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nombre de la empresa"
            className="w-full h-10 rounded-lg p-2 bg-gray-700/50"
          />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-gray-700/50 w-full h-10 rounded-lg flex items-center justify-center"
          >
            <PlusIcon size={20} className="text-white" />
            <span className="text-white ml-2">Elige una imagen</span>
          </label>
          {selectedImage && (
            <div className="w-full h-40 flex flex-col items-start justify-center mt-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-40 max-w-40 rounded-lg object-cover"
                style={{ width: "150px", height: "150px" }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="cursor-pointer mt-2 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Eliminar imagen
              </button>
            </div>
          )}
          <textarea
            placeholder="Descripción de la empresa"
            className="w-full h-40 rounded-lg p-2 bg-gray-700/50 resize-none"
          />
          <button
            type="submit"
            className="bg-primary text-white bg-purple-500 w-full h-10 rounded-lg cursor-pointer font-semibold"
          >
            Crear empresa
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCard;
