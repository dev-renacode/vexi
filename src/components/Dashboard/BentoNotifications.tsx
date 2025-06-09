import BentoGeneralItem from "./BentoGeneralItem";

interface BentoNotificationsProps {
  className?: string;
}

const BentoNotifications = ({ className }: BentoNotificationsProps) => {
  return (
    <BentoGeneralItem className={className}>
      <h2>Notifications</h2>
      <p>Cargando...</p>
    </BentoGeneralItem>
  );
};

export default BentoNotifications;
