import React from 'react'
import { screen, render } from '@testing-library/react'
import relatedVideoData from '../../../mock/relatedVideos.mockData.json'
import RelatedVideos from '../RelatedVideos'

describe('Testing RelatedVideos component', () => {
  it('render information of a video', () => {
    render(<RelatedVideos related={relatedVideoData.items} />)

    screen.debug
  })

  it('The component render a list of the videos', () => {
    render(<RelatedVideos related={relatedVideoData.items} />)
    relatedVideoData.items.forEach((item) => {
      expect(screen.getAllByText(item.snippet.title)[0]).toBeInTheDocument
    })
  })
})
