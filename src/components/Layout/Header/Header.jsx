import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Search/Search.component';
import classes from './Header.module.css';

const Header = ({ onFavoritesToggle, onLoginToggle }) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const onSearchToggle = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  const buttons = [
    {
      mainClass: 'favorites-button',
      name: 'Favorites',
      clickEvt: onFavoritesToggle,
    },
    {
      mainClass: 'search-button',
      name: 'Search',
      clickEvt: onSearchToggle,
    },
    {
      mainClass: 'login-button',
      name: 'Login',
      clickEvt: onLoginToggle,
    },
  ];

  const printHeaderButtons = () => {
    return buttons.map((button) => (
      <button
        className={classes[button.mainClass]}
        onClick={button.clickEvt}
        name={button.name}
        key={button.name}
      >
        <i className={classes.icon}></i>
        <span className={classes['button-text']}>{button.name}</span>
      </button>
    ));
  };

  return (
    <header>
      <div className={classes['header-container']}>
        <Link to="/" className={classes['header-logo']} data-testid="logo">
          Dark<span>Beat</span>
        </Link>

        <div className={classes['header-utilities']}>
          {printHeaderButtons()}
        </div>
      </div>
      <Search isOpen={searchIsOpen} onClose={onSearchToggle} />
    </header>
  );
};

export default Header;
