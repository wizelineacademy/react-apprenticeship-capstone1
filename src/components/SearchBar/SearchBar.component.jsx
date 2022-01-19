import React from 'react';
import { ReactSVG } from 'react-svg';

import { Input, Container, IconContainer } from './SearchBar.styles';

const SeachBar = ({ placeholder, handleSearch, inputValue }) => (
  <Container>
    <IconContainer>
      <ReactSVG src="./search.svg" wrapper="svg" />
    </IconContainer>
    <Input
      value={inputValue}
      onChange={handleSearch}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleSearch(e);
        }
      }}
      type="text"
      placeholder={placeholder}
    />
  </Container>
);

export default SeachBar;
