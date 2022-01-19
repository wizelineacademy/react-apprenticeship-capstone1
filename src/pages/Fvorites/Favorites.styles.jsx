import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FavoriteContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 8px;
  width: calc(100% / 4);
  div {
    width: 100%;
  }
`;
const ContainerText = styled(Container)`
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 20px;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: 600;
    color: #e64398;
  }
  a {
    font-family: 'Quicksand', sans-serif;
    color: white;
  }
`;

const FavoriteButton = styled.button`
  border: none;
  width: 220px;
  height: 50px;
  background: transparent;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 50%);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 1.5px;
  color: #e64398;
`;

export { FavoriteButton, FavoriteContainer, Container, ContainerText };
