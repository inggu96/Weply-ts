import { fetchPopularVideos } from "@src/api/videos";
import { TopNav } from "@src/Common/Layout/TopNav";
import { MusicCard } from "@src/components/MusicCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
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
                description={item.snippet.description}
                thumbnails={item.snippet.thumbnails.high.url}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Home;
