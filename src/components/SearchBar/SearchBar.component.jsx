import React from 'react';
import { Input, Container, IconContainer, SeachImg } from './SearchBar.styles';

const SeachBar = ({ placeholder }) => (
  <Container>
    <IconContainer>
      <SeachImg src="./images/search.png" />
    </IconContainer>
    <Input type="text" placeholder={placeholder} />
  </Container>
);

export default SeachBar;
