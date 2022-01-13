import styled from 'styled-components';

const AvatarImg = styled.img`
  width: 40px;
  border-radius: 20px;
  margin: 1rem;

  @media (max-width: 715px) {
    display: none;
  }
`;

export { AvatarImg };
