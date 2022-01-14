import React, { useState } from 'react';
import VideoList from '../../components/VideoList';
import useYoutubeRelatedSearch from '../../utils/hooks/useYoutubeRelatedSearch';

import './VideoDetailView.styles.css';
import VideoDetail from '../../components/VideoDetail';
function VideoDetailView({
  selectedVideo,
  handleDisplay,
  handleSelectVideo,
  styles,
  userId,
  isLogged
}) {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useYoutubeRelatedSearch(selectedVideo, setRelatedVideos);

  return (
    <div>
      {selectedVideo!==null?<VideoDetail styles={styles} selectedVideo={selectedVideo} handleDisplay={handleDisplay} userId={userId} isLogged={isLogged}></VideoDetail>:null}
      

      <VideoList
        videos={relatedVideos}
        handleSelectVideo={handleSelectVideo}
        styles={styles}
      ></VideoList>
    </div>
  );
}

export default VideoDetailView;
