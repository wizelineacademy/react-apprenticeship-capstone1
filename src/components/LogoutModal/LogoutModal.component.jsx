import React from 'react';

import './LogoutModal.styles.scss';
import { useAuth } from '@providers/Auth';
import Button from '@components/Button';

function LogoutModal(props) {
  const { logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    props.closeModal();
  };

  return (
    <div
      data-testid={props['data-testid']}
      className={'logout-modal ' + props.className}
    >
      <h3>Are you sure you want to log out?</h3>
      <div className="logout-modal__buttons-row ">
        <Button
          text="Cancel"
          className="button--secondary"
          onClick={props.closeModal}
        />
        <Button text="Logout" onClick={deAuthenticate} />
      </div>
    </div>
  );
}

LogoutModal.defaultProps = {
  'data-testid': 'logout-modal-component',
  className: '',
  closeModal: () => {},
};

export default LogoutModal;
