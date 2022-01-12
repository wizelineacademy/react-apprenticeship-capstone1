import React from 'react'
import { screen, render } from '@testing-library/react'
import NavBar from '../NavBar.component'

describe('Testing NavBar component', () => {
  it('Render NavBar component', () => {
    render(<NavBar />)

    screen.debug
  })

  it('Render a login link', () => {
    render(<NavBar />)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('Render a search input', () => {
    render(<NavBar />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })
})
