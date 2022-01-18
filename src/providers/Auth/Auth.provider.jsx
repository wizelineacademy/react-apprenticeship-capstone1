import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import DefaultAvatar from './2D_logo_red.svg';
import { authStorage } from '@storages';

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

function login(username, password, userData) {
  if (username === 'wizeline' && password === 'Rocks!') {
    authStorage.set(userData);
    return true;
  }
  return false;
}

function logout(userData) {
  return authStorage.set(userData);
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children, defaultAuthenticated, defaultUserInfo }) {
  const [authenticated, setAuthenticated] = useState(!!defaultAuthenticated);
  const [userInfo, setUserInfo] = useState(
    defaultUserInfo
      ? defaultUserInfo
      : {
          username: 'Guest',
          avatar: DefaultAvatar,
        }
  );

  useEffect(() => {
    const lastAuthState = authStorage.get();
    if (lastAuthState !== null && !!lastAuthState.authenticated) {
      setAuthenticated(lastAuthState.authenticated);
      setUserInfo(lastAuthState.userInfo);
    }
  }, []);

  const onLogin = useCallback((username, password) => {
    if (
      login(username, password, {
        authenticated: true,
        userInfo: {
          ...userInfo,
          username: username,
        },
      })
    ) {
      setAuthenticated(true);
      setUserInfo((prevState) => ({ ...prevState, username }));
      return true;
    }
    return false;
  }, []);

  const onLogout = useCallback(() => {
    logout({ authenticated, userInfo });
    setAuthenticated(false);
    setUserInfo((prevState) => ({ ...prevState, username: 'Guest' }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login: onLogin,
        logout: onLogout,
        authenticated,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth, RequireAuth, login, logout };
