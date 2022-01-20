import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Search from '../../Search/Search.component';

const Header = (props) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const onSearchToggle = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  return (
    <header>
      <div className={classes['header-container']}>
        {/* <button className={`${classes.header__menuBtn} ${classes.header__menuBtn_active}` }>
                    <i>
                        <span></span>
                        <span></span>
                        <span></span>
                    </i>
                    <span className={classes['button-text']>Menu</span>
                </button> */}

        <Link to="/" className={classes['header-logo']} data-testid="logo">
          Dark<span>Beat</span>
        </Link>

        <div className={classes.header__utilities}>
          <button
            className={classes['favorites-button']}
            onClick={props.onFavoritesToggle}
            name="Favorites"
          >
            <i className={classes.icon}></i>
            <span className={classes['button-text']}>Favorites</span>
          </button>

          <button
            className={classes['search-button']}
            onClick={onSearchToggle}
            name="Search"
          >
            <i className={classes.icon}></i>
            <span className={classes['button-text']}>Search</span>
          </button>

          <button
            className={classes['login-button']}
            onClick={props.onLoginToggle}
            name="Login"
          >
            <i className={classes.icon}></i>
            <span className={classes['button-text']}>Login</span>
          </button>
        </div>
      </div>
      <Search isOpen={searchIsOpen} onClose={onSearchToggle} />
    </header>
  );
};

export default Header;
