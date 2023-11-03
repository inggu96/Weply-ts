import { useVideoStore } from "store/Playlist";

export const VideoTable = () => {
  const { videos, removeVideo } = useVideoStore();

  return (
    <table>
      <tbody>
        {videos.map((video) => (
          <tr key={video.id}>
            <td>{video.id}</td>
            <td>{video.title}</td>
            <td>
              <img src={video.thumbnails} alt="" />
            </td>
            <td>
              <button onClick={() => removeVideo(video.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
