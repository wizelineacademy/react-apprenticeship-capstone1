import React from 'react';
//import { useParams } from 'react-router-dom';

import './VideoDetails.styles.scss';
import VideoInfo from '@components/VideoInfo';
import VideoList from '@components/VideoList';

function VideoDetails() {
  // let params = useParams();

  return (
    <section className="video-details">
      <div className="video-details__video-player"></div>
      <div className="video-details__info">
        <VideoInfo />
        <VideoList />
      </div>
    </section>
  );
}

export default VideoDetails;
