import React, { useContext } from 'react';
import CurrentVideoContext from '../../context/current-video-context';
import useFetchYoutubeVideos from '../../hooks/useFetchYoutubeVideos';
import usePopulateVideoCards from '../../hooks/usePopulateVideoCards';

const VideoRecommendationsList = () => {
  const currentVideoContext = useContext(CurrentVideoContext);
  const recommendedVideos = useFetchYoutubeVideos({
    related: true,
    relatedToId: currentVideoContext.videoDetails.id,
  });

  const videosList = usePopulateVideoCards(recommendedVideos);

  if (recommendedVideos.items && videosList.length > 0) {
    console.log('in recommended return');
    return <>{videosList}</>;
  } else {
    return <></>;
  }
};

export default VideoRecommendationsList;
