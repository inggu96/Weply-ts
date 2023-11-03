import React from "react";
import { Modal } from "../Modal";
import ModalFrame from "../ModalFrame";
import { usePlayListStore, useVideoStore } from "store/Playlist";

type PlayerModalType = {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  dimClick?: boolean;
  isDim?: boolean;
  onClose?: boolean;
  className?: string;
};

const PlayerModal = ({
  setOnModal,
  children,
  dimClick,
  isDim = true,
  className,
}: PlayerModalType) => {
  const { modalId } = usePlayListStore();
  const { videos, removeVideo } = useVideoStore();
  console.log(modalId);

  return (
    <ModalFrame
      setOnModal={setOnModal}
      isDim={isDim}
      onClose
      dimClick={dimClick}
      className={className}
    >
      <Modal.Title>
        <div>
          <div>
            {modalId && (
              <div key={modalId.id}>
                <img src={modalId.thumbnails} alt={modalId.title} />
                <h2>{modalId.title}</h2>
              </div>
            )}
          </div>
        </div>
      </Modal.Title>
      <Modal.Content>aaaa</Modal.Content>
    </ModalFrame>
  );
};

export default PlayerModal;
