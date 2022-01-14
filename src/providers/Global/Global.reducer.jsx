import { CHANGE_THEME, SET_SEARCH_PARAM } from './GloBal.types'

export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.payload,
      }
    case CHANGE_THEME:
      console.log(state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    default:
      return state
  }
}
