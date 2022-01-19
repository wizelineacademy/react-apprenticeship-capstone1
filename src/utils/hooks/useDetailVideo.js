import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useDetailVideos = () => {
  const params = useParams();

  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.videoId}&key=AIzaSyBuaBEPAdATLau7mysPe-Nms-hLCo8Ufis`;
  const [detailVideo, setDetailVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchVideoById = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get(url);
        setDetailVideo(result.data.items[0]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchVideoById();
  }, [params]);
  return {
    detailVideo,
    isLoading,
    isError,
  };
};
export default useDetailVideos;
