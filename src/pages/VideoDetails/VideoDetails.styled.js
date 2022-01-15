import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 1rem 1.5rem;
  background-color: ${(props) =>
    !props.darkTheme ? 'white' : 'rgb(211,211,211)'};
`
