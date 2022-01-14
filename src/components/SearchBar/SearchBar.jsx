import React from 'react';
import { StyledSearchBar } from './SearchBar.styles';
//import axios from 'axios';

function SearchBar({ search }) {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search" onChange={search} />
    </StyledSearchBar>
  );
}

export default SearchBar;
