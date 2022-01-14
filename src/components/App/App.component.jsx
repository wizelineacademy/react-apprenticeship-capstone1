import React, { useState } from 'react';
import SearchContext from '../../context/search-context';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';

function App() {
  const [searchQuery, setSearchQuery] = useState('wizeline');
  const value = { searchQuery, setSearchQuery };

  return (
    <SearchContext.Provider value={value}>
      <Header />
      <MainContainer>
        <Heading title="Welcome to the challenge!" />
        <VideosContainer />
      </MainContainer>
    </SearchContext.Provider>
  );
}

export default App;
