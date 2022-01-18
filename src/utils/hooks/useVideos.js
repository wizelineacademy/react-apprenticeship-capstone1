import axios from 'axios';
import { useEffect, useState } from 'react';

const useVideos = (url) => {
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
  }, []);
  return {
    videos,
    isLoading,
    isError,
    setVideos,
    setIsLoading,
    setIsError,
  };
};

export default useVideos;
