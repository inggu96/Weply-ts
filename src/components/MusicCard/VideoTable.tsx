import { usePlayListStore, useVideoStore } from "store/Playlist";

export const VideoTable = () => {
  const { videos, removeVideo } = useVideoStore();
  const { setSelectVideoId } = usePlayListStore();

  return (
    <div>
      <table>
        <tbody>
          {videos.map((video, index) => (
            <tr
              className="flex w-full border-b py-3 cursor-pointer hover:shadow-md px-2 bg-white shadow"
              onClick={() => setSelectVideoId(video.id)}
              key={index}
            >
              <td>{index}</td>
              {/* <td>{video.id}</td> */}
              <td>
                <img
                  className=" w-10 h-10 object-cover rounded-lg w-20"
                  src={video.thumbnails}
                  alt=""
                />
              </td>
              <td className="text-red-500 capitalize font-semibold pt-1">{video.title}</td>
              {/* 캡션 <div className="text-xs text-gray-500 uppercase font-medium"></div> */}
              <td>
                <button onClick={() => removeVideo(video.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
