import styled from 'styled-components';


export const BodyApp = styled.body`
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  background-image:
    linear-gradient(
      120deg,
      #eea2a2 0,
      #bbc1bf 19%,
      #57c6e1 42%,
      #b49fda 79%,
      #7ac5d8 100%
    );
  background-size: 400% 400%;
  background-position: var(--bg-position);
  transition: background-position 2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;