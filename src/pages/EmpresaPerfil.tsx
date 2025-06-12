import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalLayout from "../components/ModalLayout";
import Input from "../components/Input";
import ProductoCard from "../components/Dashboard/ProductoCard";

interface Empresa {
  company: {
    nombre: string;
    descripcion: string;
    logo: string;
    creationDate: string;
  };
}

interface ProductData {
  nombre: string;
  descripcion: string;
  precio: string;
  palabrasClave: string[];
  empresaId: string;
  imagen: string;
}

const EmpresaPerfil = () => {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [modal, setModal] = useState(false);
  const [productos, setProductos] = useState<ProductData[]>([]);

  const handleModal = () => {
    setModal(!modal);
  };

  const addProducto = (newProducto: ProductData) => {
    setProductos((prevProductos) => [...prevProductos, newProducto]);
  };

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch(
        `http://localhost:3000/api/productos?empresaId=${id}`
      );
      const data: ProductData[] = await response.json();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  useEffect(() => {
    const fetchEmpresa = async () => {
      const response = await fetch(`http://localhost:3000/empresas/${id}`);
      const data = await response.json();
      setEmpresa(data);
    };
    fetchEmpresa();
  }, [id]);

  if (!empresa) return <div>Cargando...</div>;

  return (
    <section className="w-full max-w-7xl mx-auto h-screen lg:pl-64">
      <div className="w-full h-[300px] rounded-b-xl relative">
        <img
          src={`http://localhost:3000${empresa.company.logo}`}
          alt={empresa.company.nombre}
          className="w-full h-full object-cover rounded-b-xl"
        />
        <img
          className="bg-black rounded-full w-[150px] h-[150px] absolute bottom-[-70px] left-15 border-5 border-black"
          src="https://placehold.co/150x150"
          alt=""
        />
      </div>

      <div className="pl-55 pt-2">
        <h1 className="text-3xl font-bold">{empresa.company.nombre}</h1>
        <p className="text-gray-400">
          <span className="font-bold">Descripción:</span>{" "}
          {empresa.company.descripcion}
        </p>
        <p className="text-gray-400">
          <span className="font-bold">Creada el:</span>{" "}
          {empresa.company.creationDate}
        </p>
      </div>

      <div className="pt-15">
        <h2 className="font-bold text-3xl">Tus productos</h2>
        <p className="text-gray-400">
          Aquí podrás tanto crear como eliminar productos de tu empresa
        </p>
        <div className="pt-6 flex gap-4 flex-wrap pb-20">
          <button className="cursor-pointer" onClick={handleModal}>
            <div className="bg-secondary w-60 h-55 flex flex-col items-center justify-center rounded-xl">
              <PlusIcon size={50} className="text-primary" />
              <p className="text-gray-400 font-semibold">Añadir producto</p>
            </div>
          </button>
          {productos.map((producto, id) => (
            <ProductoCard
              key={id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
        {modal && (
          <ModalProducto
            isOpen={modal}
            setIsOpen={setModal}
            addProducto={addProducto}
          />
        )}
      </div>
    </section>
  );
};

const ModalProducto = ({
  isOpen,
  setIsOpen,
  addProducto,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addProducto: (newProducto: ProductData) => void;
}) => {
  const { id: empresaId } = useParams();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [productData, setProductData] = useState<ProductData>({
    nombre: "",
    descripcion: "",
    precio: "",
    palabrasClave: [],
    empresaId: empresaId || "",
    imagen: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "palabrasClave") {
      setProductData({
        ...productData,
        [name]: value.split(",").map((word) => word.trim()),
      });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const validatePrecio = (value: string) => {
    const precio = parseFloat(value);
    if (isNaN(precio) || precio < 100 || precio > 500000) {
      alert("El precio debe estar entre $100 y $500,000.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validatePrecio(productData.precio)) {
      alert("El precio debe estar entre $100 y $500,000.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", productData.nombre);
    formData.append("descripcion", productData.descripcion);
    formData.append("precio", productData.precio);
    formData.append("empresaId", productData.empresaId);
    formData.append("palabrasClave", productData.palabrasClave.join(", "));
    if (selectedImage) {
      formData.append("imagen", selectedImage);
    }

    try {
      const response = await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const newProducto: ProductData = await response.json();
        addProducto(newProducto);
        alert("Producto creado exitosamente!");
        setIsOpen(false);
      } else {
        alert("Error al crear el producto.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el producto.");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
    event.target.value = ""; // Reset the input value
  };

  return (
    <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-1 px-9 pb-7">
        <h2 className="text-2xl font-bold text-center">Crear producto</h2>
        <p className="text-gray-400 text-center">
          Crea un nuevo producto para tu empresa.
        </p>
      </div>
      <div className="flex flex-col gap-5 px-9">
        <Input
          className="w-full"
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={productData.nombre}
          onChange={handleInputChange}
        />
        <Input
          className="w-full"
          type="text"
          name="descripcion"
          placeholder="Descripción del producto"
          value={productData.descripcion}
          onChange={handleInputChange}
        />
        <Input
          className="w-full"
          type="number"
          name="precio"
          placeholder="Precio del producto"
          value={productData.precio}
          onChange={handleInputChange}
          min="100"
          max="500000"
          step="0.01"
        />
        <Input
          className="w-full"
          type="text"
          name="palabrasClave"
          placeholder="Palabras clave del producto"
          onChange={handleInputChange}
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
            Elige una imagen para tu producto
          </span>
        </label>
        {selectedImage && (
          <div className="w-full h-40 flex flex-col items-start justify-center mt-4">
            <img
              src={URL.createObjectURL(selectedImage)}
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
          onClick={handleSubmit}
          className="bg-purple-500 text-white w-full h-10 rounded-lg cursor-pointer font-semibold"
        >
          Crear producto
        </button>
      </div>
    </ModalLayout>
  );
};

export default EmpresaPerfil;
