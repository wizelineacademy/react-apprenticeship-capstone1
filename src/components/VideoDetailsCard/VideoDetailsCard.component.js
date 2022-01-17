import React, { useContext } from 'react';
import CurrentVideoContext from '../../context/current-video-context';

const VideoDetailsCard = () => {
  const currentVideoContext = useContext(CurrentVideoContext);
  return (
    <>
      <iframe
        width="760"
        height="415"
        src={`https://www.youtube.com/embed/${currentVideoContext.videoDetails.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1>{currentVideoContext.videoDetails.title}</h1>
      <p>{currentVideoContext.videoDetails.description}</p>
    </>
  );
};

export default VideoDetailsCard;
