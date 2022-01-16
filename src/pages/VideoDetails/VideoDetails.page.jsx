import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

import './VideoDetails.styles.scss';
import useFetchRelated from './useFetchRelated.hook';
import VideoInfo from '@components/VideoInfo';
import VideoList from '@components/VideoList';

function VideoDetails() {
  let [relatedVideos, setRelatedVideos] = useState([]);
  let [relatedPageToken, setRelatedPageToken] = useState('');
  let { id } = useParams();
  let [relatedResponse, loading] = useFetchRelated(id, relatedPageToken);

  useEffect(() => {
    if (relatedResponse)
      setRelatedVideos((prevState) => prevState.concat(relatedResponse.items));
  }, [relatedResponse ? relatedResponse.etag : '']);

  return (
    <section className="video-details">
      <YouTube
        videoId="JsMaIJ3nxic"
        containerClassName="video-details__video-player-container"
        className="video-details__video-player"
      />

      <div className="video-details__info">
        <VideoInfo />
        <VideoList
          items={relatedVideos}
          loading={loading}
          loadMore={
            relatedResponse
              ? () => setRelatedPageToken(relatedResponse.nextPageToken)
              : null
          }
        />
      </div>
    </section>
  );
}

VideoDetails.defaultProps = {
  video: {},
};

export default VideoDetails;
