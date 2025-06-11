interface EmpresaCardProps {
  nombre: string;
  descripcion: string;
  logo: string;
  creationDate: string;
}

const EmpresaCard = ({ nombre, logo, creationDate }: EmpresaCardProps) => {
  return (
    <div className={`cursor-pointer h-full bg-secondary w-60 rounded-lg p-4`}>
      {/* Imagen con altura fija */}
      <div className="w-full h-32 mb-2">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`http://localhost:3000${logo}`}
          alt={nombre}
        />
      </div>

      {/* Texto alineado debajo */}
      <h1 className="text-white text-lg font-bold">{nombre}</h1>
      <p className="text-gray-400 text-sm">{creationDate}</p>
    </div>
  );
};

export default EmpresaCard;
