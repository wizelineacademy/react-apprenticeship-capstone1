import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../utils/store/StoreContext';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import classes from './Search.module.css';

const Search = () => {
  const searchInputRef = useRef();
  const { getVideos } = useGetVideos();
  const history = useHistory();
  const { store, dispatch } = useContext(StoreContext);
  const { searchIsOpen } = store;

  const onSearchClose = () => {
    dispatch({ type: 'setSearchIsOpen', payload: !searchIsOpen });
  };

  const getSearchData = (evt) => {
    evt.preventDefault();

    const searchInputValue = searchInputRef.current.value;

    if (searchInputValue) {
      getVideos(searchInputValue);

      searchInputRef.current.value = '';

      history.push('/');

      onSearchClose();
    } else {
      alert('Please complete the search field');
    }
  };

  return (
    <div
      className={`${classes['search-container']} ${
        searchIsOpen && classes.active
      }`}
    >
      <form className={classes['search-form']}>
        <input
          type="text"
          name="searchInput"
          ref={searchInputRef}
          placeholder="Type something awesome!"
        />
        <button
          type="submit"
          className={classes['send-btn']}
          onClick={getSearchData}
        >
          Send
        </button>
      </form>
      <button
        onClick={onSearchClose}
        className={`${classes['search-close-btn']} close-btn`}
      >
        Close
      </button>
    </div>
  );
};

export default Search;
