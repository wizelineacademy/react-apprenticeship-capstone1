import styled from 'styled-components';

const FavoriteContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
`;

const FavoriteButton = styled.button`
  border: none;
  width: 220px;
  height: 50px;
  background: transparent;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 1.5px;
  color: white;
`;

export { FavoriteButton, FavoriteContainer };
