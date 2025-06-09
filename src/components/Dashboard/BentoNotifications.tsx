import BentoGeneralItem from "./BentoGeneralItem";

interface BentoNotificationsProps {
  className?: string;
}

const BentoNotifications = ({ className }: BentoNotificationsProps) => {
  return (
    <BentoGeneralItem className={`${className} p-6`}>
      <h2>Notifications</h2>
      <p>Cargando...</p>
    </BentoGeneralItem>
  );
};

export default BentoNotifications;
