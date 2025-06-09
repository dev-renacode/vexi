import BentoGeneralItem from "./BentoGeneralItem";
import banner from "../../assets/images/banner.png";

interface BentoImportantItemProps {
  className?: string;
}

const BentoImportantItem = ({ className }: BentoImportantItemProps) => {
  return (
    <BentoGeneralItem className={className}>
      <img src={banner} alt="important" className="w-full h-auto rounded-xl" />
    </BentoGeneralItem>
  );
};

export default BentoImportantItem;
