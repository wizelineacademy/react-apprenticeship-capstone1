import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import Header from '../Layout/Header/Header';
import MainContainer from '../Layout/MainContainer/MainContainer';
import Login from '../Login/Login.component';
import Router from '../Router/Router.component';

const App = () => {
  const { getVideos } = useGetVideos();
  const { store, dispatch } = useContext(StoreContext);
  const { loginModalIsOpen } = store;

  useEffect(() => {
    const storageIsLogedIn = JSON.parse(
      window.localStorage.getItem('isLogedIn')
    );
    if (storageIsLogedIn) {
      dispatch({ type: 'setIsLogedIn', payload: storageIsLogedIn });
    }

    const storageLogedUserData = JSON.parse(
      window.localStorage.getItem('logedUserData')
    );
    if (storageLogedUserData) {
      dispatch({ type: 'setLogedUserData', payload: storageLogedUserData });
    }

    getVideos('Classic Rock');
  }, [dispatch]);

  return (
    <>
      <Header />
      {loginModalIsOpen && <Login />}
      <MainContainer>
        <Router />
      </MainContainer>
    </>
  );
};

export default App;
