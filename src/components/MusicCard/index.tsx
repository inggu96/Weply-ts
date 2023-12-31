import { useState } from "react";
import { usePlayListStore } from "store";
import { useVideoStore } from "store/Playlist";
import PlayerModal from "../portalModal/PlayerModal/PlayerModal";
import { MdOutlinePlaylistAdd, MdPlayCircleFilled } from "react-icons/md";

interface Props {
  videoId: string;
  thumbnails: string;
  title: string;
}

export const MusicCard = ({ videoId, title, thumbnails }: Props) => {
  const { modalId, setSelectVideoId, setModalId } = usePlayListStore();
  const { videos, addVideo } = useVideoStore();
  const [onModal, setOnModal] = useState(false);

  const handleClick = (thumbnails: string, videoId: string, title: string) => {
    const videoExists = videos.some((video) => video.id === videoId);
    if (!videoExists) {
      addVideo({ id: videoId, title, thumbnails });
    } else {
      console.log("Video already exists in the list.");
    }
    if (!modalId && !onModal) {
      setModalId(videoId, title, thumbnails);
      setSelectVideoId(videoId);
      openModal();
    }
    if (!modalId) {
      setModalId(videoId, title, thumbnails);
    }
    setSelectVideoId(videoId);
    if (!onModal) {
      openModal();
    }
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleClick(thumbnails, videoId, title);
  };
  const openModal = () => {
    if (!onModal) {
      setOnModal(true);
    }
  };
  return (
    <section>
      <div className="bg-gray-900 shadow-lg rounded p-3 mx-3 ">
        <div className="group relative">
          {onModal && <PlayerModal setOnModal={setOnModal} dimClick={false} />}
          <img
            className="w-full md:w-72 block rounded"
            src={thumbnails}
            alt=""
            onClick={() => {
              handleClick(thumbnails, videoId, title);
            }}
          />
          <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>

            <button
              onClick={handleButtonClick}
              className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
            >
              <MdPlayCircleFilled size={50} />
            </button>

            <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <MdOutlinePlaylistAdd size={30} />
            </button>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-white text-lg h-9 shadow truncate">{title}</h3>
        </div>
      </div>
    </section>
  );
};
