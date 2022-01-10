import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    img {
      margin: 0px 30px 0px 10px;
      width: 50px;
    }
    input[type='text'] {
      padding: 10px;
      border: none;
      border-bottom: 1px solid black;
      margin-top: 8px;
      margin-right: 16px;
      font-size: 17px;
      background: transparent;
    }
    h1 {
      color: #fff;
      margin: 0;
    }
    span {
      color: #e43b42;
    }
  }
`;
