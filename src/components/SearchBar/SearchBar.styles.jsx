import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
`;

const Input = styled.input`
  font-size: 12px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 1.5px;
  padding: 10px;
  margin: 10px;
  background: transparent;
  border: 1px solid pink;
  width: 350px;
  border-radius: 20px;
  text-align: center;
  color: white;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #ee5564;
  }
`;

export { Input, Container, IconContainer };
