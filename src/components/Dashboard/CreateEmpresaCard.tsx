import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import ModalLayout from "../ModalLayout";

const CreateEmpresaCard = ({
  onEmpresaCreated,
}: {
  onEmpresaCreated: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [nombre, setNombre] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [logo, setLogo] = useState<File | null>(null);
  const { user } = useUser();

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setLogo(file);
    }
    event.target.value = ""; // Reset the input value
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!user) {
      console.error("No user is logged in");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    if (logo) {
      formData.append("logo", logo);
    }
    formData.append("usuarioId", user.id);

    try {
      const response = await fetch("http://localhost:3000/empresas", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create empresa");
      }

      // Limpiar el formulario y la imagen
      setNombre("");
      setDescripcion("");
      setLogo(null);
      setSelectedImage(null);
      setIsOpen(false);

      // Actualizar la lista de empresas
      onEmpresaCreated();
    } catch (error) {
      console.error("Error creating empresa:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="cursor-pointer bg-secondary w-60 h-54 flex items-center justify-center flex-col rounded-lg"
      >
        <PlusIcon size={45} className="text-white" />
        <p className="text-white font-bold">Crear empresa</p>
      </button>
      <ModalCard
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleImageChange={handleImageChange}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        handleSubmit={handleSubmit}
        nombre={nombre}
        setNombre={setNombre}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
      />
    </div>
  );
};

const ModalCard = ({
  isOpen,
  setIsOpen,
  handleImageChange,
  selectedImage,
  setSelectedImage,
  handleSubmit,
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  handleSubmit: (event: React.FormEvent) => void;
  nombre: string;
  setNombre: (nombre: string) => void;
  descripcion: string;
  setDescripcion: (descripcion: string) => void;
}) => {
  return (
    <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col items-center justify-center pb-6">
        <h1 className="text-2xl font-bold">Crear empresa</h1>
        <p className="text-gray-400">
          Crea una nueva empresa para empezar a trabajar.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 px-7"
      >
        <input
          type="text"
          placeholder="Nombre de la empresa"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full h-10 rounded-lg p-2 bg-gray-700/50"
        />

        <textarea
          placeholder="Descripción de la empresa"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full h-40 rounded-lg p-2 bg-gray-700/50 resize-none"
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
          className="cursor-pointer bg-gray-700/50 w-full h-10 rounded-lg flex items-center px-2"
        >
          <PlusIcon size={20} className="text-white" />
          <span className="text-white ml-2">
            Elige un banner para tu empresa
          </span>
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

        <button
          type="submit"
          className="bg-primary text-white bg-purple-500 w-full h-10 rounded-lg cursor-pointer font-semibold"
        >
          Crear empresa
        </button>
      </form>
    </ModalLayout>
  );
};

export default CreateEmpresaCard;
