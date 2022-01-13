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
    <section
      data-testid={props['data-testid']}
      className={'header ' + props.className}
    >
      <IconButton
        data-testid="header__sidebar-button"
        icon={<FontAwesomeIcon icon={['fas', 'bars']} size="2x" />}
        className="header__icon_button"
        onClick={() => props.setIsSideBarOpen((prevState) => !prevState)}
      />
      <div className={'header__search-bar-container'}>
        <Searchbar
          data-testid="header__searchbar"
          className={
            searchBarFocus
              ? 'header__search-bar header__search-bar--grow'
              : 'header__search-bar'
          }
          onFocusChange={onSearchBarFocusChange}
        />
      </div>
      <IconButton
        data-testid="header__home-button"
        icon={<WizelineIcon />}
        onClick={() => navigate('/')}
      />
    </section>
  );
}

Header.defaultProps = {
  'data-testid': 'header',
  className: '',
  setIsSideBarOpen: () => {},
};

export default Header;
