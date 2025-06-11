interface WrapProps {
  children: React.ReactNode;
  className?: string;
}

const Wrap = ({ children, className }: WrapProps) => {
  return (
    <section className={`flex mx-auto flex-wrap gap-5 pt-7 ${className}`}>
      {children}
    </section>
  );
};

export default Wrap;
