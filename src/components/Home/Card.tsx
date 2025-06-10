interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <section className="bg-secondary rounded-lg p-4 text-white w-full lg:w-70 h-auto space-y-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-md font-light">{description}</p>
    </section>
  );
};

export default Card;
