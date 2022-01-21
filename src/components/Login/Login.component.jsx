import React from 'react';
import Modal from '../Layout/Modal';

import classes from './Login.module.css';

const Login = (props) => {
  const submitForm = (evt) => {
    evt.preventDefault();
    console.log('tomalo');
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes['login-form']} onSubmit={submitForm}>
        <h4>Login</h4>
        <div className={classes['form-control']}>
          <label htmlFor="user">User</label>
          <input type="text" name="user" />
        </div>
        <div className={classes['form-control']}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className={classes['form-actions']}>
          <button onClick={props.onClose}>Cancel</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
