import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledDetail } from './Detail.styles';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

import Navbar from '../../components/Navbar/Navbar.component';

function Detail() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideoById = async () => {
      let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.videoId}&key=AIzaSyDrde2OFO_CNqcG5Z2jjDXzNczQxE_RpGg`;
      const response = await axios.get(url);
      setVideo(response.data.items[0]);
    };
    fetchVideoById();
  }, []);

  const params = useParams();

  return (
    <>
      <Navbar />
      <StyledDetail>
        <section>
          <div className="iframe">
            <div>{video != null ? <VideoFrame id={video.id} /> : null}</div>
            <div className="video-data">
              <h3>{video != null ? <p>{video.snippet.title}</p> : null}</h3>
              <div>
                {video != null ? (
                  <p>{video.snippet.description.substr(0, 1000)}...</p>
                ) : null}
              </div>
            </div>
          </div>
          <RelatedVideos />
        </section>
      </StyledDetail>
    </>
  );
}

export default Detail;
