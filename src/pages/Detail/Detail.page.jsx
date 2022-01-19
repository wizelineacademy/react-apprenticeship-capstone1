import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../../components/Context/AppContext';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledDetail } from './Detail.styles';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Navbar from '../../components/Navbar/Navbar';

function Detail() {
  const { addVideoToFavorite, favoritesList } = useContext(AppContext);
  const [detailVideo, setDetailVideo] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams();

  useEffect(() => {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.videoId}&key=AIzaSyDwsRUO25ZI25bzx-K7L8QKsRG39bIBiDg`;
    const fetchVideoById = async () => {
      const response = await axios.get(url);
      setDetailVideo(response.data.items[0]);
    };
    fetchVideoById();
  }, [params]);

  useEffect(() => {
    if (favoritesList.length) {
      let isInArray = favoritesList.includes(
        (video) => video.id === detailVideo.id
      );
      setIsFavorite(isInArray);
    }
  }, [params.videoId, favoritesList, detailVideo.id]);

  const onFavoriteClick = (detailVideo) => {
    addVideoToFavorite(detailVideo);
    setIsFavorite(!isFavorite);
  };

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
                  data-testid="start"
                  className={isFavorite ? 'on favorite' : 'favorite'}
                  onClick={() => onFavoriteClick(detailVideo)}
                />
                <div>
                  {detailVideo.snippet &&
                    detailVideo.snippet.description.substring(0, 2000)}
                  ...
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
