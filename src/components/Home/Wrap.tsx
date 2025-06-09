interface WrapProps {
  children: React.ReactNode;
  className?: string;
}

const Wrap = ({ children, className }: WrapProps) => {
  return (
    <section
      className={`flex justify-center mx-auto flex-wrap gap-7 ${className}`}
    >
      {children}
    </section>
  );
};

export default Wrap;
