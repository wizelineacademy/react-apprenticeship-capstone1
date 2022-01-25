import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Search.module.css';
import { useGetVideos } from '../../utils/hooks/useGetVideos';

const Search = ({ onClose, isOpen }) => {
  const searchInputRef = useRef();

  const { getVideos } = useGetVideos();
  const history = useHistory();

  const getData = (evt) => {
    evt.preventDefault();

    const searchInputValue = searchInputRef.current.value;

    if (searchInputValue) {
      getVideos(searchInputValue);

      searchInputRef.current.value = '';

      history.push('/');

      onClose();
    } else {
      alert('Please complete the search field');
    }
  };

  return (
    <div
      className={`${classes['search-container']} ${isOpen && classes.active}`}
    >
      <form className={classes['search-form']}>
        <input type="text" name="searchInput" ref={searchInputRef} />
        <button type="submit" className={classes['send-btn']} onClick={getData}>
          Send
        </button>
      </form>
      <button onClick={onClose} className={classes['close-btn']}>
        Close
      </button>
    </div>
  );
};

export default Search;
