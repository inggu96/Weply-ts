import { Modal } from "../Modal";
import ModalFrame from "../ModalFrame";
import { usePlayListStore, useVideoStore } from "store/Playlist";
import { VideoTable } from "@src/components/MusicCard/VideoTable";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircleFilled,
  MdVolumeOff,
  MdVolumeUp,
} from "react-icons/md";

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

  const icons = [
    { color: "text-grey-darker", icon: <MdShuffle size={30} /> },
    { color: "text-grey-darker", icon: <MdSkipPrevious size={30} /> },
    { color: "text-black p-8 rounded-full bg-red-light shadow-lg", icon: <MdPlayCircleFilled /> },
    { color: "text-grey-darker", icon: <MdSkipNext size={30} /> },
    { color: "text-grey-darker", icon: <MdVolumeUp size={30} /> },
  ];

  return (
    <ModalFrame
      setOnModal={setOnModal}
      isDim={isDim}
      onClose
      dimClick={dimClick}
      className={className}
    >
      <Modal.Title>
        {/* <div key={modalId.id}></div> */}
        {modalId && (
          <div className="flex flex-col items-center  w-full h-1/2 bg-white shadow-lg">
            <div className="w-1/2 flex items-center justify-center ">
              <img
                className=" p-3 rounded-full shadow-lg"
                src={modalId.thumbnails}
                alt={modalId.title}
              />
            </div>
            <div className="w-full p-8">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl text-grey-darkest font-medium">{modalId.title}</h3>
                  <p className="text-sm text-grey mt-1">youtube captions</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                {icons.map((item, index) => (
                  <div className={item.color} key={index}>
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-4 py-4">
              <div className="flex justify-between text-sm text-grey-darker">
                <p>0:40</p>
                <p>4:20</p>
              </div>
              <div className="mt-1">
                <div className="h-1 bg-grey-dark rounded-full">
                  <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                    <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal.Title>
      <Modal.Content>
        <div className="w-full h-1/2 overflow-y-scroll">
          <VideoTable />
        </div>
      </Modal.Content>
    </ModalFrame>
  );
};

export default PlayerModal;
