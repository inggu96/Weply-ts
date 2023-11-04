type ModalTitleType = {
  children: React.ReactNode;
};

const ModalTitle = ({ children }: ModalTitleType) => {
  return <div className="flex-grow font-bold w-full">{children}</div>;
};

export default ModalTitle;
