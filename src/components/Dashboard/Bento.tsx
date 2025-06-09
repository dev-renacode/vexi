import BentoImportantItem from "./BentoImportantItem";
import BentoNotifications from "./BentoNotifications";
import BentoStatsItem from "./BentoStatsItem";
import { FaUsers } from "react-icons/fa";

const Bento = () => {
  return (
    <section className="w-full h-[600px] grid grid-cols-12 grid-rows-13 gap-4">
      <BentoStatsItem
        className="col-span-12 row-span-5 md:col-span-3"
        title="Example"
        stat="10.000"
        percentage={10}
        icon={<FaUsers />}
      />
      <BentoStatsItem
        className="col-span-12 row-span-5 md:col-span-3"
        title="Example"
        stat="10.000"
        percentage={10}
        icon={<FaUsers />}
      />
      <BentoStatsItem
        className="col-span-12 row-span-5 md:col-span-3"
        title="Example"
        stat="10.000"
        percentage={10}
        icon={<FaUsers />}
      />
      <BentoStatsItem
        className="col-span-12 row-span-5 md:col-span-3"
        title="Example"
        stat="10.000"
        percentage={10}
        icon={<FaUsers />}
      />
      <BentoImportantItem className="col-span-8 md:row-span-8 md:col-span-8 " />
      <BentoNotifications className="col-span-8 md:row-span-8 md:col-span-4" />
    </section>
  );
};

export default Bento;
