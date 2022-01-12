import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePortal from 'react-useportal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.styles.scss';
import { useAuth } from '@providers/Auth';
import DefaultAvatar from './2D_logo_red.svg';
import LoginModal from '@components/LoginModal';
import LogoutModal from '@components/LogoutModal';
import IconButton from '@components/IconButton';

function Sidebar(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const { authenticated } = useAuth();
  var { openPortal, closePortal, isOpen, Portal } = usePortal({
    bindTo: document && document.getElementById('modal-root'),
  });

  return (
    <div className={'sidebar ' + props.className}>
      <div className="sidebar__close-button-container">
        <IconButton
          icon={<FontAwesomeIcon icon={['fas', 'times']} size="2x" />}
          className="sidebar__close-button"
          onClick={() => props.setIsSideBarOpen((prevState) => !prevState)}
        />
      </div>
      <div className="sidebar__user-info-container">
        <img
          src={DefaultAvatar}
          alt="User's avatar"
          className="sidebar__avatar-image"
        />
        <h3>Username</h3>
      </div>

      <div
        className={
          'sidebar__tab ' +
          (location.pathname === '/' ? 'sidebar__tab--selected' : '')
        }
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={['fas', 'home']} size="2x" />
        <h3>Home</h3>
      </div>

      {authenticated ? (
        <div
          className={
            'sidebar__tab ' +
            (location.pathname === '/favorites' ? 'sidebar__tab--selected' : '')
          }
          onClick={() => navigate('/favorites')}
        >
          <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
          <h3>Favorites</h3>
        </div>
      ) : null}

      <div className="sidebar__item sidebar__link" onClick={openPortal}>
        {authenticated ? <h3>Logout</h3> : <h3>Login</h3>}
      </div>

      {isOpen &&
        (authenticated ? (
          <Portal>
            <LogoutModal closeModal={closePortal} />
          </Portal>
        ) : (
          <Portal>
            <LoginModal closeModal={closePortal} />
          </Portal>
        ))}
    </div>
  );
}

Sidebar.defaultProps = {
  className: '',
  isLogged: false,
  setIsSideBarOpen: () => {},
};

export default Sidebar;
