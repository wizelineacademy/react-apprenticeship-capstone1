/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_TO_FAVORITESLIST':
      const favoriteVideo = state.favoritesList.find(
        (video) => video.id === action.payload.id
      );
      const favorite = favoriteVideo
        ? [...state.favoritesList]
        : [...state.favoritesList, action.payload];

      return {
        ...state,
        favoritesList: favorite,
      };
    case 'GET_VIDEO_DETAILS':
      return {
        ...state,
        detailVideo: [action.payload, ...state.detailVideo],
      };
    case 'TOGGLE_MODE':
      return {
        ...state,
        toggleMode: !state.toggleMode,
      };
    default:
      return state;
  }
};
