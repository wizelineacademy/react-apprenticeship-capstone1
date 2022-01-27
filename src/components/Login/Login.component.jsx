import React, { useRef, useContext } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import { useAuth } from '../../utils/hooks/useAuth';
import Modal from '../Layout/Modal';
import classes from './Login.module.css';

const Login = () => {
  const userInput = useRef();
  const passwordInput = useRef();
  const { logIn } = useAuth();
  const { store, dispatch } = useContext(StoreContext);
  const { loginModalIsOpen } = store;

  const login = (evt) => {
    evt.preventDefault();

    const user = userInput.current.value;
    const password = passwordInput.current.value;

    logIn(user, password);

    onCloseModal();
  };

  const onCloseModal = () => {
    dispatch({ type: 'setLoginModalIsOpen', payload: !loginModalIsOpen });
  };

  return (
    <Modal onClose={onCloseModal}>
      <form className={classes['login-form']} onSubmit={login}>
        <h4>Login</h4>
        <div className={classes['form-control']}>
          <label htmlFor="user">User</label>
          <input type="text" name="user" ref={userInput} />
        </div>
        <div className={classes['form-control']}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordInput} />
        </div>
        <div className={classes['form-actions']}>
          <button onClick={onCloseModal} className="primary-btn">
            Cancel
          </button>
          <button type="submit" className="primary-btn">
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
