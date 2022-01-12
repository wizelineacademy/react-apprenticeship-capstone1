import React from 'react'
import { screen, render } from '@testing-library/react'
import data from '../../../utils/MockData.json'
import ItemList from '../ItemList'

describe('Testing ItemList component', () => {
  it('render a list of elements', () => {
    render(<ItemList items={data.items} />)

    screen.debug
  })

  it('every card element has a title', () => {
    render(<ItemList items={data.items} />)

    data.items.forEach((item) => {
      expect(screen.getAllByText(item.snippet.title)[0]).toBeInTheDocument
    })
  })
})
