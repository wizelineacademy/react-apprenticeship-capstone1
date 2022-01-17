import { useState, useEffect } from 'react';
import mockVideos from '../mockvideos/youtube-mock-videos.json';

const useFetchYoutubeVideos = (props) => {
  const [fetchedVideos, setVideosFetched] = useState([]);

  const APIKey = 'AIzaSyAOqGGiLINVpKNbodXDzDhpWqsrIgq7qrU';
  const resultMax = 20;
  let fetchURL = '';

  if (props.related) {
    fetchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultMax}&order=date&type=video&relatedToVideoId=${props.relatedToId}&key=${APIKey}`;
  } else {
    fetchURL = `https://www.googleapis.com/youtube/v3/search?q=${props.queryString}&part=snippet&maxResults=${resultMax}&order=date&key=${APIKey}`;
  }
  //console.log(fetchURL);
  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => setVideosFetched(data));
  }, [fetchURL]);

  if (fetchedVideos.error) {
    return mockVideos;
  }

  return fetchedVideos;
};

export default useFetchYoutubeVideos;
