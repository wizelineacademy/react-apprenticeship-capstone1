import { useState, useContext } from 'react';
import { StoreContext } from '../store/store-context';

const useGetVideos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setVideoList, setRelatedVideoList, setSearchParamTitle } =
    useContext(StoreContext);
  const defaultSearchParam = 'Clasic Rock';
  const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY;
  const API_URL_TEST = 'mockService.json';
  const BASE_API_URL =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=medium&videoCategoryId=10&maxResults=20';

  const fetchVideos = async (URL, TYPE) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error('Something went wrong with the videos service!');
      }

      const data = await response.json();

      //Create a new array with the needed info

      const transformedVideos = data.items.map((videoData) => {
        return {
          id: videoData.id.videoId
            ? videoData.id.videoId
            : videoData.id.channelId,
          title: videoData.snippet.title,
          description: videoData.snippet.description,
          thumbnail: videoData.snippet.thumbnails.medium.url,
        };
      });

      if (TYPE === 'USER_VIDEOS') {
        setVideoList(transformedVideos);
      }
      if (TYPE === 'RELATED_VIDEOS') {
        setRelatedVideoList(transformedVideos);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  //Get User Videos by search component or the default loaded

  const testingAPI = true; //Only for testing purposes set "false" to test with youtube API

  const getVideos = (searchParam) => {
    const API_URL = testingAPI
      ? API_URL_TEST
      : `${BASE_API_URL}&q=${
          searchParam ? searchParam : defaultSearchParam
        }musica/music&key=${API_KEY}`;

    setSearchParamTitle(searchParam ? searchParam : defaultSearchParam);

    fetchVideos(API_URL, 'USER_VIDEOS');
  };

  //Get Related Videos

  const getRelatedVideos = (videoId) => {
    const API_URL = testingAPI
      ? API_URL_TEST
      : `${BASE_API_URL}&relatedToVideoId=${videoId}&key=${API_KEY}`;

    fetchVideos(API_URL, 'RELATED_VIDEOS');
  };

  return { isLoading, error, getVideos, getRelatedVideos };
};

export { useGetVideos };
