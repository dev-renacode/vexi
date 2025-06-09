interface BentoGeneralItemProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGeneralItem = ({ children, className }: BentoGeneralItemProps) => {
  return (
    <article
      className={`${className} relative rounded-xl backdrop-blur-md shadow-inner bg-purple-bg-2 border-2 border-purple-bg/30`}
    >
      {children}
    </article>
  );
};

export default BentoGeneralItem;
