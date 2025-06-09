import BentoGeneralItem from "./BentoGeneralItem";

interface BentoItemProps {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  stat: string;
  percentage: number;
}

const BentoStatsItem = ({
  className,
  icon,
  title,
  stat,
  percentage,
}: BentoItemProps) => {
  return (
    <BentoGeneralItem
      className={`${className} flex flex-col gap-3 justify-center p-6`}
    >
      <div className="flex items-center justify-between">
        <div className="from-purple-400 to-purple-600 bg-gradient-to-b p-3 rounded-xl flex items-center justify-center w-fit h-fit">
          <h2 className="text-white text-2xl">{icon}</h2>
        </div>
        <div>
          <p className="text-green-300 text-sm">+{percentage}%</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-2xl font-bold">{stat}</p>
        <h3 className="text-gray-300 text-sm">{title}</h3>
      </div>
    </BentoGeneralItem>
  );
};

export default BentoStatsItem;
