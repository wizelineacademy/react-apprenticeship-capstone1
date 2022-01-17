import React from 'react';
import VideoCard from '../components/VideoCard';

const usePopulateVideoCards = (videos, displayDescription = true) => {
  let videoCardsPopulated = <></>;
  const { items } = videos;

  if (items && items.length > 0) {
    videoCardsPopulated = items.map((video, index) => {
      return (
        <VideoCard
          imgsrc={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
          key={`${video.id.videoId}-${index}`}
          id={video.id.videoId}
          displayDescription={displayDescription}
        />
      );
    });
  }

  return videoCardsPopulated;
};

export default usePopulateVideoCards;
