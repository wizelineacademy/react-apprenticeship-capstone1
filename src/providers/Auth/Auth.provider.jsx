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
function AuthProvider({
  children,
  defaultAuthenticated,
  defaultUserInfo,
  defaultFavorites,
}) {
  const [authenticated, setAuthenticated] = useState(!!defaultAuthenticated);
  const [favorites, setFavorites] = useState(
    defaultFavorites ? defaultFavorites : []
  );
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
      setFavorites(lastAuthState.favorites);
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
        favorites,
      })
    ) {
      setAuthenticated(true);
      setUserInfo((prevState) => ({ ...prevState, username }));
      return true;
    }
    return false;
  }, []);

  const onLogout = useCallback(() => {
    logout({ authenticated, userInfo, favorites });
    setAuthenticated(false);
    setUserInfo((prevState) => ({ ...prevState, username: 'Guest' }));
  }, []);

  const addFavorites = useCallback((favorites) => {
    favorites = favorites.filter(
      (item) =>
        Object.prototype.hasOwnProperty.call(item, 'id') &&
        Object.prototype.hasOwnProperty.call(item, 'videoId')
    );
    setFavorites(favorites);
  });

  const addFavorite = useCallback((favorite) => {
    setFavorites((prevState) => {
      return prevState.find((item) => item.id.videoId === favorite.id.videoId)
        ? prevState.push(favorite)
        : prevState;
    });
  });

  const isFavorite = useCallback((favorite) => {
    return Boolean(
      favorites.find((item) => item.id.videoId === favorite.id.videoId)
    );
  });

  const removeFavorite = useCallback((favorite) => {
    setFavorites((prevState) => {
      return prevState.filter(
        (item) => item.id.videoId !== favorite.id.videoId
      );
    });
  });

  return (
    <AuthContext.Provider
      value={{
        login: onLogin,
        logout: onLogout,
        addFavorite,
        removeFavorite,
        addFavorites,
        isFavorite,
        authenticated,
        userInfo,
        favorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth, RequireAuth, login, logout };
