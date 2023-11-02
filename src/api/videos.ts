import config from "@src/config";

export const fetchPopularVideos = async () => {
  const url = new URL(`${config.API_URL}/videos`);
  url.searchParams.append("part", "snippet");
  url.searchParams.append("chart", "mostPopular");
  url.searchParams.append("maxResults", "20");
  url.searchParams.append("order", "relevance");
  url.searchParams.append("key", config.API_KEY || "");
  const response = await fetch(url.toString());
  const responseData = await response.json();
  return responseData.items;
};
