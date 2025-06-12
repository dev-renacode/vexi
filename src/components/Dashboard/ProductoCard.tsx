interface ProductoCardProps {
  nombre: string;
  precio: string;
  imagen: string;
}

const ProductoCard = ({ nombre, precio, imagen }: ProductoCardProps) => {
  // Format the price to Chilean Pesos (CLP)
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(parseFloat(precio));
  return (
    <div className="cursor-pointer h-full bg-secondary w-60 rounded-lg p-4">
      <div className="w-full h-32 mb-2">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`http://localhost:3000${imagen}`}
          alt={nombre}
        />
      </div>
      <h3 className="text-white text-lg font-bold">{nombre}</h3>
      <p className="text-green-400 font-semibold">{formattedPrice}</p>
    </div>
  );
};

export default ProductoCard;
