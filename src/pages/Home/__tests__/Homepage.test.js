import React from 'react'
import { screen, render } from '@testing-library/react'
import HomePage from '../Home.page'

describe('Testing HomePage component', () => {
  it('Render HomePage component', () => {
    render(<HomePage />)

    screen.debug
  })

  it('shows the HomePage Title', () => {
    render(<HomePage />)
    expect(screen.getAllByText('Welcome to Wize Tube!')).toBeInTheDocument
  })
})
