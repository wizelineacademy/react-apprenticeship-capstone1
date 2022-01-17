import React from 'react';

const CurrentVideoContext = React.createContext({
  isActive: false,
  setIsActive: function () {},
  videoDetails: { id: '', title: '', description: '', relatedVideos: [] },
  setVideoDetails: function () {},
});

export default CurrentVideoContext;
