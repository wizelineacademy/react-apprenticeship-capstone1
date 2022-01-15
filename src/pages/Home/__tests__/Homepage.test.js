import React from 'react'
import HomePage from '../Home.page'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { handlers } from '../../../mock/handlers'

const server = new setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Testing HomePage component', () => {
  it('Render HomePage component', () => {
    act(() => {
      render(<HomePage />)
    })
    screen.debug
  })

  it('shows a loading text', async () => {
    act(() => {
      render(<HomePage />)
    })
    screen.debug
    expect(screen.getByText('...Loading')).toBeInTheDocument
  })

  it('shows the HomePage Title', async () => {
    act(() => {
      render(<HomePage />)
    })

    await waitFor(
      () =>
        expect(screen.findAllByText('Welcome to Wize Tube!')[0])
          .toBeInTheDocument
    )
  })
})
