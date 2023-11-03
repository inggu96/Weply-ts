import { usePlayListStore, useVideoStore } from "store/Playlist";

export const VideoTable = () => {
  const { videos, removeVideo } = useVideoStore();
  const { setSelectVideoId } = usePlayListStore();

  return (
    <table>
      <tbody>
        {videos.map((video, index) => (
          <tr className="bg-indigo-500" onClick={() => setSelectVideoId(video.id)} key={index}>
            <td>{index}</td>
            {/* <td>{video.id}</td> */}
            <td>
              <img className="w-20" src={video.thumbnails} alt="" />
            </td>
            <td>{video.title}</td>

            <td>
              <button onClick={() => removeVideo(video.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
