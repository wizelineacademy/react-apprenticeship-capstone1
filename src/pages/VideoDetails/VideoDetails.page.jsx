import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

import './VideoDetails.styles.scss';
import useFetchRelated from '@src/hooks/useFetchRelated.hook';
import useFetchVideoInfo from '@src/hooks/useFetchVideoInfo.hook';
import VideoInfo from '@components/VideoInfo';
import VideoList from '@components/VideoList';

function VideoDetails(props) {
  let { id } = useParams();
  let [relatedVideos, setRelatedVideos] = useState([]);
  let [relatedPageToken, setRelatedPageToken] = useState('');
  let [relatedResponse, loadingRelated] = useFetchRelated(id, relatedPageToken);
  let [videoInfoResponse] = useFetchVideoInfo(id);

  useEffect(() => {
    if (relatedResponse) {
      let items = relatedResponse.items.filter(
        (item) => !relatedVideos.find((video) => video.id === item.id)
      );
      setRelatedVideos((prevState) => prevState.concat(items));
    }
  }, [relatedResponse ? relatedResponse.etag : '']);

  let videoInfo;
  if (videoInfoResponse && videoInfoResponse.items.length > 0)
    videoInfo = videoInfoResponse.items[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section data-testid={props['data-testid']} className="video-details">
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
  'data-testid': '',
};

export default VideoDetails;
