import BurgerMenu from './BurgerMenu.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('BurgerMenu component', () => {
  it('should be rendered as a div with title burger-menu-container', () => {
    //Arrange
    render(<BurgerMenu />);
    const menuElement = screen.getByTestId('burger-menu-container');

    //Act

    //Assert
    expect(menuElement).toBeInTheDocument();
  });

  it('should render 3 divs which together create the burger', () => {
    //Arrange
    render(<BurgerMenu />);
    const burgerLines = screen.getAllByTestId('burger-line');

    //Act

    //Assert
    expect(burgerLines).toHaveLength(3);
  });
});
