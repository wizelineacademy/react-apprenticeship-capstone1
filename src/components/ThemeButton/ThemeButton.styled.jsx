import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e43b42;
  color: #fff;
  margin-right: 20px;
  height: 50%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
