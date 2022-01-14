import React from 'react';
import VideoCard from '../components/VideoCard';

const usePopulateVideoCards = (props) => {
  let videoCardsPopulated = <></>;

  videoCardsPopulated = props.items ? (
    props.items.map((video, index) => {
      return (
        <VideoCard
          imgsrc={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
          key={`${video.id.videoId}-${index}`}
        />
      );
    })
  ) : (
    <></>
  );

  return videoCardsPopulated;
};

export default usePopulateVideoCards;
