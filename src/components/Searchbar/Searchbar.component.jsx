import React, { useContext, useState } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchbarInput } from './Searchbar.styled';
import SearchContext from '../../context/search-context';
import CurrentVideoContext from '../../context/current-video-context';

const Searchbar = () => {
  const searchContext = useContext(SearchContext);
  const currentVideoContext = useContext(CurrentVideoContext);
  const [value, setValue] = useState('');

  const InputChangeHandler = (evt) => {
    if (evt.key === 'Enter') {
      searchContext.setSearchQuery(value);
      console.log(evt.key);
      currentVideoContext.setIsActive(false);
    }
  };

  return (
    <SearchbarInput
      type="text"
      placeholder="Search something..."
      value={value}
      onKeyPress={InputChangeHandler}
      onChange={(evt) => {
        setValue(evt.target.value);
      }}
    />
  );
};

export default Searchbar;
