import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  padding: 24px 8px;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CardsContainer = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default CardsContainer;
