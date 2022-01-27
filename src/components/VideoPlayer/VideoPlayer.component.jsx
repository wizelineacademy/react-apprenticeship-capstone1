import React from 'react';

const VideoPlayer = ({ videoId }) => {
  return (
    <iframe
      width="420"
      height="315"
      name={videoId}
      title={videoId}
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
};

export default VideoPlayer;
