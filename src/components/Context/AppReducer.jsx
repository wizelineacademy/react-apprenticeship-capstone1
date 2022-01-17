export default (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_TO_FAVORITESLIST':
      return {
        ...state,
        favoritesList: [action.payload, ...state.favoritesList],
      };
    case 'GET_VIDEO_DETAILS':
      return {
        ...state,
        detailVideo: [action.payload, ...state.detailVideo],
      };
    default:
      return state;
  }
};
