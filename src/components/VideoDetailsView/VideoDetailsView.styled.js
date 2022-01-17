import styled from 'styled-components';

const VideoDetailsViewStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export { VideoDetailsViewStyled };
