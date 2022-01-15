
const fetchVideos = async () => {
  const response = await fetch(
    //'https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=${process.env.REACT_APP_YOUTUBE_API_KEY}'
  );
  if (!response.ok) {
    throw Error('some useful message');
  }
  return response.json();
};

export { fetchVideos };


