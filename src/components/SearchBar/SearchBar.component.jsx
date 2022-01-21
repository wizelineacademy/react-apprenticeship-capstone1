import React from 'react';
import { useState } from 'react';

import styles from './SearchBar.module.scss';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('send');
  // };

  return (
    <form>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        className={styles.headerSearchbar}
      />
      <input className={styles.headerBtnSubmit} type="submit" />
    </form>
  );
}

export default SearchBar;
