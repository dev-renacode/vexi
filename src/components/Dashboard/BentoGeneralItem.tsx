interface BentoGeneralItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const BentoGeneralItem = ({
  children,
  className,
  style,
}: BentoGeneralItemProps) => {
  return (
    <article
      className={`${className} relative rounded-xl backdrop-blur-md shadow-inner bg-purple-bg-2 border-2 border-purple-bg/30`}
      style={style}
    >
      {children}
    </article>
  );
};

export default BentoGeneralItem;
