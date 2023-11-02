import { TopNav } from "@src/Common/Layout/TopNav";
import { MusicCard } from "@src/components/MusicCard";
import { useQuery } from "@tanstack/react-query";

interface VideoItem {
  snippet: {
    title: string;
    description: string;
  };
}

const Home = () => {
  const { isLoading, error, data } = useQuery<VideoItem[]>({
    queryKey: ["popular"],
    queryFn: async () => {
      const url = new URL("https://youtube.googleapis.com/youtube/v3/videos");
      url.searchParams.append("part", "snippet");
      url.searchParams.append("chart", "mostPopular");
      url.searchParams.append("maxResults", "20");
      url.searchParams.append("order", "relevance");
      url.searchParams.append("key", "AIzaSyB4dGTE7TllfIFr6p_hh6L2ix1NOub_Bo4" || "");
      const response = await fetch(url.toString());
      const responseData = await response.json();
      return responseData.items;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <div className="bg-black h-screen">
      <div className="flex flex-col items-center md:px-24 lg:px-52   ">
        <TopNav />
        <div className="grid grid-cols-4 sm:grid-cols gap-4">
          {data?.map((item, index) => (
            <MusicCard
              key={index}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
