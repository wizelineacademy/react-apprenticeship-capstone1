import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 20px 60px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0px;
  }
`;
