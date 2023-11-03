import ModalPortal from "./PortalModal";

type modalFrameType = {
  children: React.ReactNode;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: boolean;
  isDim?: boolean;
  zindex?: number;
  dimClick?: boolean;
  onClick?: () => void;
  className?: string;
};

const ModalFrame = ({
  children,
  setOnModal,
  onClose,
  isDim,
  dimClick,
  onClick,
}: modalFrameType) => {
  return (
    <ModalPortal>
      <div className="fixed top-0 left-0 w-full h-full" onClick={onClick}>
        <div className="absolute top-0 bottom-0 right-0 px-20 pt-20 m-auto bg-white min-w-[10%] min-h-[100%] w-fit h-fit pb-30 rounded-12">
          <div className="flex flex-col items-stretch w-full">
            {children}
            {onClose && (
              <div
                className="absolute inline-flex cursor-pointer right-5 top-0"
                onClick={() => setOnModal(false)}
              >
                닫기
              </div>
            )}
          </div>
        </div>
        {isDim && (
          <div className="w-full h-full bg-dim" onClick={() => dimClick && setOnModal(false)}></div>
        )}
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
