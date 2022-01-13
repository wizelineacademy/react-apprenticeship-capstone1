import React from 'react';
import { Input, Container, IconContainer, SeachImg } from './SearchBar.styles';

const SeachBar = ({ placeholder, handleSearch, inputValue }) => (
  <Container>
    <IconContainer>
      <SeachImg src="./images/search.png" />
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
