import React, { useState, useEffect, useContext, useCallback } from 'react';
import AuthContext from '../../auth/AuthContext.auth';
import getVideos from '../../selectors/getVideos';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  
  const [authenticated, setAuthenticated] = useState(false);
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState('Wizeline');



  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    getVideos(category).then((videosData) => {
      setVideos(videosData);
    });

    setAuthenticated(isAuthenticated);
  }, [category]);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, videos, category, setCategory }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
