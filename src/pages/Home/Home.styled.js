import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  background-color: ${(props) =>
    !props.darkTheme ? 'white' : 'rgb(211,211,211)'};
`

export const HomeSubheader = styled.h1`
  color: rgb(121, 21, 21);
`
