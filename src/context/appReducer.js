export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEOS':
      return { ...state, videos: action.payload };
    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'UPDATE_UI_MODE':
      return { ...state, backMode: action.payload, styles: action.styles };
    default:
      return state;
  }
};
