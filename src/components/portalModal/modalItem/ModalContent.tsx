type ModalContent = {
  children: React.ReactNode;
};

const ModalContent = ({ children }: ModalContent) => {
  return <div className="w-full h-screen overflow-y-scroll">{children}</div>;
};

export default ModalContent;
