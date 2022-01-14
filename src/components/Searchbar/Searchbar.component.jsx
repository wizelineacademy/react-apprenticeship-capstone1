import React, { useContext, useState } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchbarInput } from './Searchbar.styled';
import SearchContext from '../../context/search-context';

const Searchbar = () => {
  const searchContext = useContext(SearchContext);
  const [value, setValue] = useState('');

  const InputChangeHandler = (evt) => {
    if (evt.key === 'Enter') {
      searchContext.setSearchQuery(value);
      console.log(evt.key);
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
