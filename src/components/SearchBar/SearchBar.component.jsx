import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SearchBar.styles.scss';
import { useSearch } from '@providers/Search';
import IconButton from '@components/IconButton';

function SearchBar(props) {
  let navigate = useNavigate();
  let [searchTermContext, dispatchSearch] = useSearch();
  let [searchTerm, setSearchTerm] = useState(searchTermContext.searchTerm);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatchSearch({ type: 'SET_SEARCH_TERM', value: searchTerm });
      navigate('/');
    },
    [searchTerm]
  );

  return (
    <div
      data-testid={props['data-testid']}
      className={'search-container ' + props.className}
    >
      <form className="search-container__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search..."
          autoComplete="off"
          name="search-bar"
          className="search-container__input"
          onFocus={() => props.onFocusChange(true)}
          onBlur={() => props.onFocusChange(false)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          icon={<FontAwesomeIcon icon={['fas', 'search']} size="1x" />}
          className="search-container__button"
        />
      </form>
    </div>
  );
}

SearchBar.defaultProps = {
  'data-testid': 'searchbar',
  className: '',
  onFocusChange: null,
};

export default SearchBar;
