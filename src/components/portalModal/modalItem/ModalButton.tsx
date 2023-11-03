type ModalContent = {
  children: React.ReactNode;
};

const ModalButton = ({ children }: ModalContent) => {
  return <div className="flex">{children}</div>;
};

export default ModalButton;
