import axios from 'axios';
import { useEffect, useState } from 'react';

export const useVideos = (
  url = 'https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyDwsRUO25ZI25bzx-K7L8QKsRG39bIBiDg'
) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setVideos(result.data.items);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [videos, isLoading, isError, setVideos, setIsLoading, setIsError];
  //   return { videos, isLoading, isError, setVideos, setIsLoading, setIsError };
};
