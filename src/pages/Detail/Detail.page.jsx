import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../components/Context/AppContext';
import { FaStar } from 'react-icons/fa';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledDetail } from './Detail.styles';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

import Navbar from '../../components/Navbar/Navbar.component';

function Detail() {
  const { getVideosList, detailVideo } = useContext(AppContext);
  //const params = useParams();

  useEffect(() => {
    let devRoute = 'http://localhost:3000/detailedVideos';
    //let realRoute = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

    const fetchVideoById = async () => {
      let url = devRoute;
      const response = await axios.get(url);
      console.log(response.data[0].items[0].id);
      getVideosList(response.data[0].items[0]);
      console.log(detailVideo[0].snippet);
      //setVideo(response.data.items[0]);
    };
    fetchVideoById();
  }, []);

  return (
    <>
      <Navbar />
      <StyledDetail>
        {detailVideo !== null ? (
          <section>
            <div className="iframe">
              <VideoFrame id={detailVideo[0].id.videoId} />
              <div className="video-data">
                <h3>{detailVideo[0].snippet.title}</h3>
                <FaStar className="favorite" />
                <div>
                  <p>{detailVideo[0].snippet.description.substr(0, 1000)}...</p>
                </div>
              </div>
            </div>

            <RelatedVideos />
          </section>
        ) : null}
        <RelatedVideos />
      </StyledDetail>
    </>
  );
}

export default Detail;
