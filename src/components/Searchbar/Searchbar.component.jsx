import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SearchbarInput } from './Searchbar.styled';

const Searchbar = () => {
  return (
    <React.Fragment>
      <SearchbarInput type="search" placeholder="Search something..." />
    </React.Fragment>
  );
};

export default Searchbar;
