import React from 'react'
import HomePage from '../Home.page'
import { render, waitFor, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
/* import { handlers } from '../../../mock/handlers' */
/* 
const server = new setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
afterAll(() => cleanup()) */

describe('Testing HomePage component', () => {
  it('Render HomePage component', () => {
    act(() => {
      render(<HomePage />)
    })
    screen.debug
  })

  it('shows a loading text', async () => {
    render(<HomePage />)

    screen.debug
    expect(screen.getByText('...Loading')).toBeInTheDocument
  })

  it('shows the HomePage Title', async () => {
    render(<HomePage />)

    await waitFor(
      () =>
        expect(screen.findAllByText('Welcome to Wize Tube!')[0])
          .toBeInTheDocument
    )
  })
})
