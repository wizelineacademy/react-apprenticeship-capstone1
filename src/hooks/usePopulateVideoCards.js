import React from 'react';
import VideoCard from '../components/VideoCard';

const usePopulateVideoCards = (props) => {
  let videoCardsPopulated = <></>;

  videoCardsPopulated = props.items ? (
    props.items.map((video) => {
      return (
        <VideoCard
          imgsrc={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
          key={video.id.videoId}
        />
      );
    })
  ) : (
    <></>
  );

  return videoCardsPopulated;
};

export default usePopulateVideoCards;
