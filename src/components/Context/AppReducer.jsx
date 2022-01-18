/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case 'ADD_VIDEO_TO_FAVORITESLIST':
      console.log('favorite list', state.favoritesList, action.payload);
      const favorite = [...state.favoritesList];

      const index = state.favoritesList.findIndex(
        (video) => video.id === action.payload.id
      );
      if (index !== -1) {
        favorite.splice(index, 1);
      } else {
        favorite.push(action.payload);
      }
      return {
        ...state,
        favoritesList: favorite,
      };
    case 'GET_VIDEO_DETAILS':
      return {
        ...state,
        detailVideo: [action.payload, ...state.detailVideo],
      };
    case 'TOGGLE_WEB_THEME':
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    default:
      return state;
  }
};
