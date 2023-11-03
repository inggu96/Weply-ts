type ModalTitleType = {
  children: React.ReactNode;
};

const ModalTitle = ({ children }: ModalTitleType) => {
  return <div className="text-3xl font-bold">{children}</div>;
};

export default ModalTitle;
