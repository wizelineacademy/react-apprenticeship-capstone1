import { useContext } from 'react';

import { Context } from '../../context';

const useFavorites = () => {
  const { state, dispatch } = useContext(Context);
  const { selectedVideo: selectedVideoFromState = { snippet: [] }, favorites } =
    state;

  const addFavorites = (id) => {
    if (selectedVideoFromState.id.videoId === id) {
      dispatch({
        type: 'SAVE_FAVORITES',
        payload: {
          favorites: [...state.favorites, selectedVideoFromState],
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
  const isfavorited = (video) => {
    const favrited = favorites.filter((item) => {
      if (item.id.videoId === video.id.videoId) return true;
      return false;
    });
    return !!favrited.length;
  };

  return { addFavorites, deleteFavorites, isfavorited };
};

export default useFavorites;
