import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1b9aaa;
  div {
    display: flex;
    align-items: center;
    img {
      margin: 0px 30px 0px 10px;
      width: 40px;
      filter: invert(32%) sepia(72%) saturate(2631%) hue-rotate(336deg)
        brightness(92%) contrast(95%);
      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 20px;
      }
    }
    input[type='text'] {
      padding: 10px;
      border: none;
      border-bottom: 1px solid #fff;
      margin-top: 8px;
      margin-right: 16px;
      font-size: 17px;
      background: transparent;
      ::placeholder {
        color: #fff;
      }
      @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
      }
    }
    h1 {
      color: #fff;
      margin: 0;
      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 28px;
      }
    }
    span {
      color: #e43b42;
      font-weight: 200;
    }
  }
`;
