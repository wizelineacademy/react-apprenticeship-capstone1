import React from 'react'
import { render } from '@testing-library/react'
import App from '../App.component'

describe('Testing App component', () => {
  it('Should render the app component', () => {
    render(<App />)
  })
})
