import { useContext, useCallback } from 'react';
import { StoreContext } from '../store/StoreContext';

const useGetVideos = () => {
  const { dispatch } = useContext(StoreContext);

  const API_KEY = process.env.REACT_APP_YOUTUBE_APIKEY;
  const API_URL_TEST = 'mockService.json';
  const BASE_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=medium&videoCategoryId=10&maxResults=20&key=${API_KEY}`;
  const testingAPI = false; //Only for testing purposes set "false" to test with youtube API

  const fetchVideos = useCallback(
    async (requestParam, type) => {
      const API_URL = `${BASE_API_URL}${requestParam}`;
      const URL = !testingAPI ? API_URL : API_URL_TEST;

      dispatch({ type: 'setFetchIsLoading', payload: true });
      dispatch({ type: 'setFetchError', payload: null });

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Something went wrong with the videos service!');
        }

        response.json().then((data) => {
          const transformedVideos = [];

          data.items.forEach((videoData) => {
            if ('snippet' in videoData && 'id' in videoData) {
              transformedVideos.push({
                id: videoData.id.videoId
                  ? videoData.id.videoId
                  : videoData.id.channelId,
                title: videoData.snippet.title,
                description: videoData.snippet.description,
                thumbnail: videoData.snippet.thumbnails.medium.url,
              });
            }
          });

          if (type === 'USER_VIDEOS') {
            dispatch({ type: 'setVideoList', payload: transformedVideos });
          }
          if (type === 'RELATED_VIDEOS') {
            dispatch({
              type: 'setRelatedVideoList',
              payload: transformedVideos,
            });
          }
        });

        //Create a new array with the needed info
      } catch (error) {
        dispatch({ type: 'setFetchError', payload: error.message });
      }

      dispatch({ type: 'setFetchIsLoading', payload: false });
    },
    [BASE_API_URL, dispatch, testingAPI]
  );

  //Get User Videos by search component or the default loaded

  const getVideos = useCallback(
    (searchParam) => {
      const requestParam = `&q=${searchParam}musica/music`;
      dispatch({ type: 'setSearchParamTitle', payload: searchParam });
      fetchVideos(requestParam, 'USER_VIDEOS');
    },
    [dispatch, fetchVideos]
  );

  //Get Related Videos

  const getRelatedVideos = useCallback(
    (videoId) => {
      const requestParam = `&relatedToVideoId=${videoId}`;
      fetchVideos(requestParam, 'RELATED_VIDEOS');
    },
    [fetchVideos]
  );

  return { getVideos, getRelatedVideos };
};

export { useGetVideos };
