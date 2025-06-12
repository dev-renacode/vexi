import { XIcon } from "lucide-react";

const ModalLayout = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black/60 fixed top-0 left-0 w-full h-full z-50 justify-center items-center`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="bg-secondary w-150 h-auto pb-30 flex flex-col rounded-lg">
        <div className="flex items-center justify-end p-7">
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <XIcon size={30} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
