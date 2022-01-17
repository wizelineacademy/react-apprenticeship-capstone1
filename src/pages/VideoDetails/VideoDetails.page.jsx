import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

import './VideoDetails.styles.scss';
import useFetchRelated from '@src/hooks/useFetchRelated.hook';
import useFetchVideoInfo from '@src/hooks/useFetchVideoInfo.hook';
import VideoInfo from '@components/VideoInfo';
import VideoList from '@components/VideoList';

function VideoDetails() {
  let { id } = useParams();
  let [relatedVideos, setRelatedVideos] = useState([]);
  let [relatedPageToken, setRelatedPageToken] = useState('');
  let [relatedResponse, loadingRelated] = useFetchRelated(id, relatedPageToken);
  let [videoInfoResponse] = useFetchVideoInfo(id);

  useEffect(() => {
    if (relatedResponse)
      setRelatedVideos((prevState) => prevState.concat(relatedResponse.items));
  }, [relatedResponse ? relatedResponse.etag : '']);

  let videoInfo;
  if (videoInfoResponse && videoInfoResponse.items.length > 0)
    videoInfo = videoInfoResponse.items[0];
  else
    videoInfo = {
      snippet: { title: '', publishTime: new Date(), description: '' },
    };

  return (
    <section className="video-details">
      <YouTube
        videoId={id}
        containerClassName="video-details__video-player-container"
        className="video-details__video-player"
      />
      <div className="video-details__info">
        <VideoInfo video={videoInfo} />
        <VideoList
          items={relatedVideos}
          loading={loadingRelated}
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
