import { useState, useContext } from 'react';

import { Context } from '../../context';

const useFavorites = () => {
  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    recomendedVideoSelected = { id: { videoId: '' } },
  } = state;
  const [favorited, setFavorited] = useState(selectedVideoFromState.favorited);

  const selectFavorites = (id) => {
    if (selectedVideoFromState.id.videoId === id) {
      dispatch({
        type: 'SAVE_SELECTED_VIDEO',
        payload: {
          selectedVideo: {
            ...state.selectedVideo,
            favorited: true,
          },
        },
      });
      setFavorited(selectedVideoFromState.favorited);
      dispatch({
        type: 'SAVE_FAVORITES',
        payload: {
          favorites: [...state.favorites, selectedVideoFromState],
        },
      });
    }
    if (recomendedVideoSelected.id.videoId === id) {
      dispatch({
        type: 'SAVE_RECOMENDED_VIDEO',
        payload: {
          recomendedVideoSelected: {
            ...state.recomendedVideoSelected,
            favorited: true,
          },
        },
      });
      setFavorited(recomendedVideoSelected.favorited);
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
    if (selectedVideoFromState.id.videoId === id) {
      dispatch({
        type: 'SAVE_SELECTED_VIDEO',
        payload: {
          selectedVideo: {
            ...state.selectedVideo,
            favorited: false,
          },
        },
      });
      setFavorited(selectedVideoFromState.favorited);
    }
    if (recomendedVideoSelected.id.videoId === id) {
      dispatch({
        type: 'SAVE_RECOMENDED_VIDEO',
        payload: {
          recomendedVideoSelected: {
            ...state.recomendedVideoSelected,
            favorited: false,
          },
        },
      });
      setFavorited(recomendedVideoSelected.favorited);
    }
  };

  return { selectFavorites, deleteFavorites, favorited };
};

export default useFavorites;
