import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './Header.styles.scss';
import IconButton from '@components/IconButton';
import Searchbar from '@components/SearchBar';
import { ReactComponent as WizelineIcon } from './2D_logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
  let navigate = useNavigate();
  let [searchBarFocus, onSearchBarFocusChange] = useState(false);

  return (
    <section className={'header ' + props.className}>
      <IconButton
        icon={<FontAwesomeIcon icon={['fas', 'bars']} size="2x" />}
        className="header__icon_button"
        onClick={() => props.setIsSideBarOpen((prevState) => !prevState)}
      />
      <div className={'header__search-bar-container'}>
        <Searchbar
          className={
            searchBarFocus
              ? 'header__search-bar header__search-bar--grow'
              : 'header__search-bar'
          }
          onFocusChange={onSearchBarFocusChange}
        />
      </div>
      <IconButton icon={<WizelineIcon />} onClick={() => navigate('/')} />
    </section>
  );
}

Header.defaultProps = {
  className: '',
  setIsSideBarOpen: () => {},
};

export default Header;
