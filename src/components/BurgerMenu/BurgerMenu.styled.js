import styled from 'styled-components';

const BurgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 35px;
  margin: 1rem;

  @media (max-width: 715px) {
    width: 10vw;
    margin: 1rem 2vw;
  }
`;

const BurgerLine = styled.div`
  width: 33px;
  height: 3px;
  background-color: #3a3642;
  margin: 3px 0;
`;

export { BurgerContainer, BurgerLine };
