import React from 'react';
import VideoCard from '../components/VideoCard';

const usePopulateVideoCards = (props) => {
  let videoCardsPopulated = <></>;
  const { items } = props;

  if (items && items.length > 0) {
    videoCardsPopulated = items.map((video, index) => {
      return (
        <VideoCard
          imgsrc={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
          key={`${video.id.videoId}-${index}`}
          id={video.id.videoId}
        />
      );
    });
  }

  return videoCardsPopulated;
};

export default usePopulateVideoCards;
