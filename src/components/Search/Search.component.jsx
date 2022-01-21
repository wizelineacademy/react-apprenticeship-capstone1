import React from 'react';

import classes from './Search.module.css';

const Search = (props) => {
  return (
    <div
      className={`${classes['search-container']} ${
        props.isOpen && classes.active
      }`}
    >
      <input type="text" name="searchInput" />
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

export default Search;
