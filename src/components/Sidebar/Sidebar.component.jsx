import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePortal from 'react-useportal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.styles.scss';
import { useAuth } from '@providers/Auth';
import { useTheme } from '@providers/Theme';
import DefaultAvatar from './2D_logo_red.svg';
import LoginModal from '@components/LoginModal';
import LogoutModal from '@components/LogoutModal';
import IconButton from '@components/IconButton';
import Switch from '@components/Switch';

function Sidebar(props) {
  const { authenticated, userInfo } = useAuth();
  let [theme, dispatchTheme] = useTheme();

  let navigate = useNavigate();
  let location = useLocation();
  var { openPortal, closePortal, isOpen, Portal } = usePortal({
    bindTo: document && document.getElementById('modal-root'),
  });

  return (
    <div
      data-testid={props['data-testid']}
      className={'sidebar ' + props.className}
    >
      <div className="sidebar__close-button-container">
        <Switch
          label="Dark theme"
          value={theme.darkMode}
          onChange={() =>
            dispatchTheme({ type: 'SET_DARK_MODE', value: !theme.darkMode })
          }
        />
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
        <h3>{userInfo.username}</h3>
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
  'data-testid': 'sidebar',
  className: '',
  isLogged: false,
  setIsSideBarOpen: () => {},
};

export default Sidebar;
