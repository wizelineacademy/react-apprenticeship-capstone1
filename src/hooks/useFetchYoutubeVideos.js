import { useState, useEffect } from 'react';

const useFetchYoutubeVideos = (props) => {
  const [fetchedVideos, setVideosFetched] = useState([]);

  const APIKey = 'AIzaSyDIRuOAK_ZD__dsBIetL_ykW0TSDO9H_Xk';
  const resultMax = 20;
  const fetchURL = `https://www.googleapis.com/youtube/v3/search?q=${props.queryString}&part=snippet&maxResults=${resultMax}&order=date&key=${APIKey}`;

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => setVideosFetched(data));
  }, [fetchURL]);

  return fetchedVideos;
};

export default useFetchYoutubeVideos;
