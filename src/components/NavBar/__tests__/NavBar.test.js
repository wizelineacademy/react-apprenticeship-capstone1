import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
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

  it('Search input change value', () => {
    render(<NavBar />)
    console.log(screen.debug)
    const input = screen.getByRole('searchbox')
    console.log(input)

    fireEvent.change(input, { target: { value: 'Luke Skywalker' } })

    expect(input.value).toBe('Luke Skywalker')
  })
})
