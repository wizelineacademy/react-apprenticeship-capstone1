import React, { useState } from 'react';

import './LoginModal.styles.scss';
import { useAuth } from '@providers/Auth';
import Input from '@components/Input';
import Button from '@components/Button';

function LoginModal(props) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (event) => {
    event.preventDefault();
    login();
    //history.push('/secret');
    props.closeModal();
  };

  return (
    <div className={'login-modal ' + props.className}>
      <h1>Login</h1>
      <form onSubmit={authenticate} className="login-modal__form">
        <Input label="Username" value={username} onChange={setUsername} />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
        />
        <div className="login-modal__buttons-row ">
          <Button
            text="Cancel"
            className="button--secondary"
            onClick={props.closeModal}
          />
          <Button text="Login" type="submit" />
        </div>
      </form>
    </div>
  );
}

LoginModal.defaultProps = {
  className: '',
  closeModal: () => {},
};

export default LoginModal;
