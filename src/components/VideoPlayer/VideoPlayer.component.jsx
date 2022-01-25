import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  return <YouTube videoId={videoId} />;
};

export default VideoPlayer;
