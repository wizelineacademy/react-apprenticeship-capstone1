import React from 'react';

const SearchContext = React.createContext({
  searchQuery: 'wizeline',
  setSearchQuery: function () {},
});

export default SearchContext;
