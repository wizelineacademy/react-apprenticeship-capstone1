import React, { useState, useEffect, useContext, useCallback } from 'react'

/* const initialState = {
  searchParam: 'Wizeline',
}
 */
export const GlobalContext = React.createContext(null)

export const GlobalProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState('wizeline')

  const onSubmitSearch = useCallback((params) => {
    setSearchParam(params)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        onSubmitSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}