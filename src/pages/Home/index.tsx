import { fetchPopularVideos } from "@src/api/videos";
import { TopNav } from "@src/Common/Layout/TopNav";
import { MusicCard } from "@src/components/MusicCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player";
import { useState } from "react";
import { usePlayListStore } from "store";

const Home = () => {
  const { selectVideoID } = usePlayListStore();
  const { isLoading, error, data } = useQuery<VideoItem[]>({
    queryKey: ["popular"],
    queryFn: fetchPopularVideos,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black h-screen">
      <div className="flex flex-col items-center md:px-24 lg:px-52">
        <TopNav />
        <h1 className="mt-24 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-200 mb-5">
          인기리스트
        </h1>
        <div className="grid grid-cols-1">
          <Slider {...settings}>
            {data?.map((item, index) => (
              <MusicCard
                key={index}
                title={item.snippet.title}
                thumbnails={item.snippet.thumbnails.high.url}
                videoId={item.id}
              />
            ))}
          </Slider>
        </div>
        <div className="bg-sky-500 mt-5 cursor-pointer ">
          <div>
            <div onClick={toggleAccordion}>유튜브</div>
          </div>

          <div className={`${isOpen ? "block" : "hidden"}`}>
            <ReactPlayer
              controls={false}
              url={`https://www.youtube.com/watch?v=${selectVideoID}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
