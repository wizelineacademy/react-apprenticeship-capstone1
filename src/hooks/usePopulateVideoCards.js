import React from 'react';
import VideoCard from '../components/VideoCard';

const usePopulateVideoCards = (videos, displayDescription = true) => {
  let videoCardsPopulated = <></>;
  const { items } = videos;
  if (items && items.length > 0) {
    videoCardsPopulated = items.map((video, index) => {
      const {
        snippet: {
          thumbnails: { medium: { url: almaUrl = '' } = {} } = {},
          title = '',
          description = '',
        } = {},
        id: { videoId = '' } = {},
      } = video;
      const isVideoCardValid =
        title && description && almaUrl && videoId ? true : false;

      return (
        <React.Fragment key={`${videoId}-${index}`}>
          {isVideoCardValid && (
            <VideoCard
              imgsrc={almaUrl}
              title={title}
              description={description}
              id={videoId}
              displayDescription={displayDescription}
            />
          )}
        </React.Fragment>
      );
    });
  }

  return videoCardsPopulated;
};

export default usePopulateVideoCards;
