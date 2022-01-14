import React, { useState } from 'react';

import './LoginModal.styles.scss';
import { useAuth } from '@providers/Auth';
import Input from '@components/Input';
import Button from '@components/Button';

function LoginModal(props) {
  const { login } = useAuth();
  const [username, setUsername] = useState('wizeline');
  const [password, setPassword] = useState('Rocks!');

  const authenticate = (event) => {
    event.preventDefault();
    login(username, password);
    props.closeModal();
  };

  return (
    <div
      data-testid={props['data-testid']}
      className={'login-modal ' + props.className}
    >
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
  'data-testid': 'login-modal-component',
  className: '',
  closeModal: () => {},
};

export default LoginModal;
