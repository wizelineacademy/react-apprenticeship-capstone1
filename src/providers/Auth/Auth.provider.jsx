import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }

  return context;
}

function RequireAuth({ children }) {
  const { authenticated } = useAuth();

  return authenticated === true ? children : <Navigate to="/" replace />;
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children, defaultAuthenticated }) {
  const [authenticated, setAuthenticated] = useState(!!defaultAuthenticated);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState === null ? defaultAuthenticated : lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, RequireAuth };
export default AuthProvider;
