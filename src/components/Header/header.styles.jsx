import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #333333;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  @media only screen and (max-width: 1024px) {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    font-family: 'Quicksand', sans-serif;
  }
`;
const Title = styled.p`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 24px;
  color: #e64398;
  @media only screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export { Container, Title };
