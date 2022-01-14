// Component
import React from 'react'
import { useHistory } from 'react-router-dom'
import { RelatedContainer, RelatedItem, ItemImage } from './Related.styled'

function RelatedVideos({ related }) {
  const history = useHistory()

  // Functions
  const onClickItem = (id) => {
    history.push(`/${id}`)
  }

  // if  there are not related videos yet return a loading
  return !related ? (
    <>...Loading</>
  ) : (
    <RelatedContainer>
      {related.map((item) =>
        !item.snippet ? (
          ''
        ) : (
          <RelatedItem
            key={item.id.videoId}
            onClick={() => onClickItem(item.id.videoId)}
          >
            <ItemImage src={item.snippet.thumbnails.high.url} />
            <div className="item-info">
              <p className="item-title">{item.snippet.title}</p>
              <p className="item-channel">
                Published by: {item.snippet.channelTitle}
              </p>
            </div>
          </RelatedItem>
        )
      )}
    </RelatedContainer>
  )
}

export default RelatedVideos
