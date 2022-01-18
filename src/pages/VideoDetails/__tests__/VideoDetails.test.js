import React from 'react'
import VideoDetails from '../VideoDetails'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Testing HomePage component', () => {
  it('Render the VideoDetails page', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    render(
      <Router history={history}>
        <Switch>
          <VideoDetails />)
        </Switch>
      </Router>
    )
  })

  it('Render the VideoDetails info on the page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/nmXMgqjQzls'] })
    render(
      <Router history={history}>
        <Switch>
          <Route exact path="/:videoid">
            <VideoDetails />
          </Route>
        </Switch>
      </Router>
    )
    await waitFor(async () => {
      const videoTitle = screen.findByText(
        'Video Tour | Welcome to Wizeline Guadalajara'
      )
      expect(videoTitle).toBeInTheDocument
    })
  })
})
