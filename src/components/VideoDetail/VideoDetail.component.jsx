import React, { useState, useEffect } from 'react';
import {
  Title,
  Description,
  CustomCard,
} from '../../components/CustomElements';
import { storage } from '../../utils/storage';
import { Link } from 'react-router-dom';

function VideoDetail({ styles, selectedVideo, userId, isLogged }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const result = storage.find(userId, selectedVideo.id);
    if (result !== null) {
      setIsFavorite(result.favorite);
    } else {
      setIsFavorite(false);
    }
  }, [selectedVideo]);

  const addToFavorites = () => {
    storage.set(userId, {
      ...selectedVideo,
      favorite: !isFavorite,
      id: { videoId: selectedVideo.id },
    });
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    storage.remove(userId, selectedVideo.id);
    setIsFavorite(false);
  };

  return (
    <>
      <Description color={styles.customCard.fontColor}>
        <Link to="/home">Home </Link>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>{' '}
        {selectedVideo.snippet.title}
      </Description>
      <iframe
        width="100%"
        height="500px"
        title={selectedVideo.id}
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
      ></iframe>
      <CustomCard
        className="card-div-detail"
        elementBackground={styles.customCard.backgroundColor}
        height={'150px'}
      >
        <Title fontColor={styles.customCard.fontColor}>
          {selectedVideo.snippet.title}{' '}
          {isLogged ? (
            <FavoriteBadge
              isFavorite={isFavorite}
              removeFromFavorites={removeFromFavorites}
              addToFavorites={addToFavorites}
            />
          ) : null}
        </Title>
        <Description>{selectedVideo.snippet.description}</Description>
      </CustomCard>
    </>
  );
}

const FavoriteBadge = ({ isFavorite, removeFromFavorites, addToFavorites }) => {
  return (
    <>
      {isFavorite ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={removeFromFavorites}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={addToFavorites}
        >
          Add to favorites
        </button>
      )}
    </>
  );
};

export default VideoDetail;
