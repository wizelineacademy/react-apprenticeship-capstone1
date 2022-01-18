import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import NavBar from '../NavBar.component'
import { GlobalProvider } from '../../../providers/Global/Global.provider'
import { BrowserRouter } from 'react-router-dom'

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

  it('the input change the searchParam', () => {
    render(
      <BrowserRouter>
        <GlobalProvider>
          <NavBar history />
        </GlobalProvider>
      </BrowserRouter>
    )

    const input = screen.getByRole('searchbox')
    const sumbitButton = screen.getByRole('search')
    fireEvent.change(input, { target: { value: 'Luke Skywalker' } })
    fireEvent.click(sumbitButton)
    expect(input.value).toEqual('Luke Skywalker')
  })

  it('Search input change value', () => {
    render(<NavBar />)
    const input = screen.getByRole('searchbox')

    fireEvent.change(input, { target: { value: 'Luke Skywalker' } })

    expect(input.value).toBe('Luke Skywalker')
  })

  it('Render a switch toogle button', () => {
    render(<NavBar />)

    const toogleBtn = screen.getByRole('checkbox')
    expect(toogleBtn.toBeInTheDocument)
  })

  it('Changes the button text when it clicked', () => {
    render(<NavBar />)

    const toogleBtn = screen.getByRole('checkbox')
    expect(toogleBtn.toBeInTheDocument)
  })

  it('Changes the theme value when its clicked', () => {
    render(
      <GlobalProvider>
        <NavBar />
      </GlobalProvider>
    )

    const toogleBtn = screen.getByRole('checkbox')
    const navBar = screen.getByRole('navigation')
    fireEvent.click(toogleBtn)

    expect(navBar).toHaveClass('bg-dark')
  })

  it('render a button to open the side menu', () => {
    render(<NavBar />)
    const hamburguer = screen.getByLabelText('Toggle navigation')
    fireEvent.click(hamburguer)

    const sideMenu = screen.getByRole('dialog')
    expect(sideMenu).toBeInTheDocument()
  })
})
