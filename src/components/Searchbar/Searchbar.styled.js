import styled from 'styled-components';

const SearchbarInput = styled.input`
  margin: 1rem auto 1rem 1rem;
  font-family: 'Poppins';
  background: #b0a2c7;
  padding: 0.25em 1em;
  height: 3vh;
  min-height: 30px;
  width: 300px;
  border-radius: 0.5em;
  border: none;
  transition: background-color 0.5s ease;

  &:hover {
    background: #e7e1f1;
    transition: background-color 0.5s ease;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 715px) {
    width: 82vw;
    margin: 1rem 2vw;
  }
`;

export { SearchbarInput };
