import React, { useState } from 'react';

import './Header.styles.scss';
import IconButton from '@components/IconButton';
import Searchbar from '@components/SearchBar';
import { ReactComponent as WizelineIcon } from './2D_logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
  let [searchBarFocus, onSearchBarFocusChange] = useState(false);
  console.log('SEARCH BAR FOCUS', searchBarFocus);

  return (
    <section className={'header ' + props.className}>
      <IconButton
        icon={<FontAwesomeIcon icon={['fas', 'bars']} size="2x" />}
        className="header__icon_button"
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
      <IconButton icon={<WizelineIcon />} />
    </section>
  );
}

Header.defaultProps = {
  className: '',
};

export default Header;
