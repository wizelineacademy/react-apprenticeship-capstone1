import Header from './Header.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Header component', () => {
  it('should be displayed as a header element', () => {
    //Arrange
    render(<Header />);
    const HeaderElement = screen.getByRole('header');

    //Act

    //Assert
    expect(HeaderElement).toBeInTheDocument();
  });
});
