
const fetchVideos = async () => {
  const response = await fetch(
    //'https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyBBtyKxE5UhRerwjFl0rtPoL6UNDbujHmk'
  );
  if (!response.ok) {
    throw Error('some useful message');
  }
  return response.json();
};

export { fetchVideos };


