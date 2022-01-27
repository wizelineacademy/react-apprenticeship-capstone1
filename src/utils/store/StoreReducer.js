const initialStore = {
  selectedVideoData: null,
  videoList: {},
  relatedVideoList: {},
  searchParamTitle: '',
  favoritesVideoList: [],
  isLogedIn: false,
  logedUserData: {},
  loginModalIsOpen: false,
  searchIsOpen: false,
  fetchIsLoading: false,
  fetchError: null,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'setSelectedVideoData':
      return {
        ...state,
        selectedVideoData: action.payload,
      };
    case 'setVideoList':
      return {
        ...state,
        videoList: action.payload,
      };
    case 'setRelatedVideoList':
      return {
        ...state,
        relatedVideoList: action.payload,
      };
    case 'setSearchParamTitle':
      return {
        ...state,
        searchParamTitle: action.payload,
      };
    case 'setFavoritesVideoList':
      return {
        ...state,
        favoritesVideoList: action.payload,
      };
    case 'setIsLogedIn':
      return {
        ...state,
        isLogedIn: action.payload,
      };
    case 'setLogedUserData':
      return {
        ...state,
        logedUserData: action.payload,
      };
    case 'setLoginModalIsOpen':
      return {
        ...state,
        loginModalIsOpen: action.payload,
      };
    case 'setSearchIsOpen':
      return {
        ...state,
        searchIsOpen: action.payload,
      };
    case 'setFetchIsLoading':
      return {
        ...state,
        fetchIsLoading: action.payload,
      };
    case 'setFetchError':
      return {
        ...state,
        fetchError: action.payload,
      };

    default:
      return state;
  }
};

export { initialStore };
export default storeReducer;
