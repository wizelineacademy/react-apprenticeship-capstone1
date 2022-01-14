import React from 'react'
import { screen, render } from '@testing-library/react'
import videoData from '../../../mock/searchVideo.MockData.json'
import relatedData from '../../../mock/relatedVideos.mockData.json'
import VideoComponent from '../VideoComponent'

describe('Testing Video component', () => {
  it('render information of a video', () => {
    render(
      <VideoComponent video={videoData} relatedVideos={relatedData.items} />
    )

    screen.debug
  })

  it('The page has information of the video', () => {
    render(
      <VideoComponent video={videoData} relatedVideos={relatedData.items} />
    )
    const title = screen.getAllByText(
      'Video Tour | Welcome to Wizeline Guadalajara'
    )[0]
    expect(title).toBeInTheDocument
  })
})
