import { useContext } from 'react';

import { Context } from '../../context';

const useFavorites = () => {
  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    recomendedVideoSelected = { id: { videoId: '' } },
    favorites,
  } = state;

  const selectFavorites = (id) => {
    if (selectedVideoFromState.id.videoId === id) {
      dispatch({
        type: 'SAVE_FAVORITES',
        payload: {
          favorites: [...state.favorites, selectedVideoFromState],
        },
      });
    }
    if (recomendedVideoSelected.id.videoId === id) {
      dispatch({
        type: 'SAVE_FAVORITES',
        payload: {
          favorites: [...state.favorites, recomendedVideoSelected],
        },
      });
    }
  };
  const deleteFavorites = (id) => {
    const deletedVideo = state.favorites.filter(
      (item) => item.id.videoId !== id
    );
    dispatch({
      type: 'REMOVE_FAVORITES',
      payload: {
        favorites: deletedVideo,
      },
    });
  };
  const isfavorited = (video) => favorites.includes(video);

  return { selectFavorites, deleteFavorites, isfavorited };
};

export default useFavorites;
