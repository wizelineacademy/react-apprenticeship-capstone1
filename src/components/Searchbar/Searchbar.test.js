import Searchbar from './Searchbar.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Searchbar component', () => {
  it('should be displayed as an input element with Search something... as placeholder text', () => {
    //Arrange
    render(<Searchbar />);
    const searchbarElement = screen.getByPlaceholderText('Search something...');

    //Act

    //Assert
    expect(searchbarElement).toBeInTheDocument();
  });
});
