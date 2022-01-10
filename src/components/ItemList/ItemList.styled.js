import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 90vw;
  align-items: center;
`
export const Card = styled.div`
  width: 19rem;
  fit-content(20em);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem auto;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: 0 4px 2px grey;

  .cover-image {
    border-radius: 8px 5px 0 0;
    width: 100%;
    height: 10rem;
  }
  .infose-ction {
    padding: 1rem 1rem;
    height: 16rem;
  }
`
