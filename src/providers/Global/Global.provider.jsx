import React, { useState, useCallback, useReducer } from 'react'
import GlobalReducer from './Global.reducer'
import { CHANGE_THEME, SET_SEARCH_PARAM } from './GloBal.types'
const initialState = {
  searchParam: 'wizeline',
  darkTheme: false,
}

export const GlobalContext = React.createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const onSubmitSearch = useCallback((params) => {
    dispatch({
      type: SET_SEARCH_PARAM,
      payload: params,
    })
  }, [])

  const changeTheme = () => {
    dispatch({
      type: CHANGE_THEME,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam: state.searchParam,
        onSubmitSearch,
        changeTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
