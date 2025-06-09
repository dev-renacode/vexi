interface BentoContainerProps {
  children: React.ReactNode;
}

const BentoContainer = ({ children }: BentoContainerProps) => {
  return (
    <div className="h-full grid grid-cols-8 md:grid-cols-8 grid-rows-6 md:grid-rows-6 gap-2 md:gap-2">
      {children}
    </div>
  );
};

export default BentoContainer;
