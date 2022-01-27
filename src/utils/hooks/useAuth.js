import { useContext } from 'react';
import { StoreContext } from '../store/StoreContext';
import loginApi from '../login-api/login-api';

const useAuth = () => {
  const { dispatch } = useContext(StoreContext);

  const logIn = (user, password) => {
    loginApi(user, password)
      .then((response) => {
        window.localStorage.setItem('isLogedIn', true);
        window.localStorage.setItem('logedUserData', JSON.stringify(response));
        dispatch({ type: 'setIsLogedIn', payload: true });
        dispatch({ type: 'setLogedUserData', payload: response });
      })
      .catch((error) => alert(error));
  };

  const logOut = () => {
    window.localStorage.removeItem('isLogedIn');
    dispatch({ type: 'setIsLogedIn', payload: false });
    dispatch({ type: 'setLogedUserData', payload: {} });
  };

  return { logIn, logOut };
};

export { useAuth };
