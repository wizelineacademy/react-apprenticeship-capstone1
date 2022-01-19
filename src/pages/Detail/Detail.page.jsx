import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../../components/Context/AppContext';
import { FaStar } from 'react-icons/fa';
import { StyledDetail } from './Detail.styles';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Navbar from '../../components/Navbar/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import useDetailVideos from '../../utils/hooks/useDetailVideo';

function Detail() {
  const { addVideoToFavorite, favoritesList } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { detailVideo } = useDetailVideos();

  useEffect(() => {
    if (favoritesList.length) {
      let isInArray = favoritesList.includes(
        (video) => video.id === detailVideo.id
      );
      setIsFavorite(isInArray);
    }
  }, []);

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
                {isAuthenticated ? (
                  <FaStar
                    className={isFavorite ? 'on favorite' : 'favorite'}
                    onClick={() => onFavoriteClick(detailVideo)}
                  />
                ) : null}
                <div>
                  {detailVideo.snippet &&
                    detailVideo.snippet.description.substr(0, 1000)}
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
