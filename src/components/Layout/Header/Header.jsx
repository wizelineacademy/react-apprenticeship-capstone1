import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../utils/store/StoreContext';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../utils/hooks/useAuth';
import Search from '../../Search/Search.component';
import classes from './Header.module.css';

const Header = () => {
  const { logOut } = useAuth();
  const history = useHistory();
  const [isLightMode, setIsLightMode] = useState(false);
  const { store, dispatch } = useContext(StoreContext);
  const { isLogedIn, loginModalIsOpen, searchIsOpen, logedUserData } = store;

  const onSearchToggle = () => {
    dispatch({ type: 'setSearchIsOpen', payload: !searchIsOpen });
  };

  const onFavoritesLink = () => {
    history.push('/favorites');
  };

  const onLoginToggle = () => {
    dispatch({ type: 'setLoginModalIsOpen', payload: !loginModalIsOpen });
  };

  const lightModeHandler = (evt) => {
    const isChecked = evt.target.checked;
    isChecked
      ? document.body.classList.add('light')
      : document.body.classList.remove('light');
    setIsLightMode(!isLightMode);
  };

  const buttons = [
    {
      mainClass: classes['favorites-button'],
      name: 'Favorites',
      clickEvt: onFavoritesLink,
      print: isLogedIn,
    },
    {
      mainClass: classes['search-button'],
      name: 'Search',
      clickEvt: onSearchToggle,
      print: true,
    },
    {
      mainClass: !isLogedIn
        ? classes['login-button']
        : `${classes['login-button']} ${classes['active']}`,
      name: !isLogedIn ? 'Login' : 'Logout',
      clickEvt: !isLogedIn ? onLoginToggle : logOut,
      print: true,
    },
  ];

  const printHeaderButtons = buttons.map(
    (button) =>
      button.print && (
        <button
          className={button.mainClass}
          onClick={button.clickEvt}
          name={button.name}
          key={button.name}
        >
          <i className={classes.icon}></i>
          <span className={classes['button-text']}>{button.name}</span>
        </button>
      )
  );

  return (
    <header>
      <div className={classes['header-container']}>
        <div className={classes['user-utilities']}>
          {isLogedIn && logedUserData && (
            <div className={classes['user-utilities']}>
              <img src={logedUserData.avatarUrl} alt={logedUserData.name} />
              <p>Hello {logedUserData.name}</p>
            </div>
          )}
          <label className={classes['light-mode-switch']}>
            <input type="checkbox" onChange={lightModeHandler} />
            <span className={classes['light-mode-slider']}></span>
          </label>
          <p>{isLightMode ? 'Dark' : 'Light'} mode</p>
        </div>

        <Link to="/" className={classes['header-logo']} data-testid="logo">
          Dark<span>Beat</span>
        </Link>

        <div className={classes['header-utilities']}>{printHeaderButtons}</div>
      </div>
      <Search />
    </header>
  );
};

export default Header;
