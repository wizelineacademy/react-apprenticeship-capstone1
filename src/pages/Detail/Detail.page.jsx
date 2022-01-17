import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../../components/Context/AppContext';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledDetail } from './Detail.styles';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Navbar from '../../components/Navbar/Navbar.component';

function Detail() {
  const { addVideoToFavorite } = useContext(AppContext);
  const [detailVideo, setDetailVideo] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    //let devRoute = 'http://localhost:3000/detailedVideos';
    let realRoute = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.videoId}&key=AIzaSyBuaBEPAdATLau7mysPe-Nms-hLCo8Ufis`;
    const fetchVideoById = async () => {
      const response = await axios.get(realRoute);
      setDetailVideo(response.data.items[0]);
    };
    fetchVideoById();
  }, [params]);

  return (
    <>
      <Navbar />
      <StyledDetail>
        {detailVideo !== null ? (
          <section>
            <div className="iframe">
              <VideoFrame id={detailVideo && detailVideo.id} />
              <div className="video-data">
                <h3>{detailVideo.snippet && detailVideo.snippet.title}</h3>
                <FaStar
                  className="favorite"
                  onClick={() => addVideoToFavorite(detailVideo)}
                />
                <div>
                  {detailVideo.snippet && detailVideo.snippet.description}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </StyledDetail>
      <RelatedVideos />
    </>
  );
}

export default Detail;
