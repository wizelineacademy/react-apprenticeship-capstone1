import React from 'react'
import { screen, render } from '@testing-library/react'
<<<<<<< HEAD
=======
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
>>>>>>> 7c9e9027da784d4888907bf46d2c9ae3c567bb16
