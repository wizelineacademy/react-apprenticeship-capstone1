import React from 'react'
import { Card, ListContainer } from './ItemList.styled'

function ItemList({ items }) {
  return (
    <ListContainer>
      {items.map((item) => (
        <Card>
          <img
            className="cover-image"
            alt="preview"
            src={item.snippet.thumbnails.high.url}
          />
          <div className="infose-ction">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.description}</p>
          </div>
        </Card>
      ))}
    </ListContainer>
  )
}

export default ItemList
