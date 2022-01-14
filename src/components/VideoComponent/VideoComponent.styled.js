import styled from 'styled-components'

export const VideoComponentContainer = styled.div`
  display: flex;
  flex-direction: row;

  .iframe-container {
    width: 47.5em;
  }
`
export const RelatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  padding: 0.5rem 1rem;

  .item-info {
    padding: 0.5rem 0.5rem;
  }
  .item-title {
    font-size: 1rem;
  }
  .item-channel {
    font-size: 0.5rem;
    color: grey;
  }
`

export const RelatedItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0;
  padding: 0;
  border: 1px solid grey;
  border-radius: 5px;

  :hover {
    box-shadow: 1px 5px 3px grey;
  }
`

export const ItemImage = styled.img`
  max-width: 10rem;
  min-height: 8rem;
`
