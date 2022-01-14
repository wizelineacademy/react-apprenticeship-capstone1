import React from 'react'
import HomePage from '../Home.page'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { handlers } from '../../../mock/handlers'

const server = new setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Testing HomePage component', () => {
  it('Render HomePage component', () => {
    render(<HomePage />)
    screen.debug
  })

  it('shows a loading text', async () => {
    render(<HomePage />)
    screen.debug
    expect(screen.getByText('...Loading')).toBeInTheDocument
  })

  it('shows the HomePage Title', async () => {
    render(<HomePage />)

    expect(await screen.getByText('Welcome to Wize Tube!')).toBeInTheDocument
    await waitFor(
      () => screen.getByText('Welcome to Wize Tube!').toBeInTheDocument
    )
  })
})
