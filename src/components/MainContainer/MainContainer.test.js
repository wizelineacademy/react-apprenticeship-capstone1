import MainContainer from './MainContainer.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('MainContainer component', () => {
  it('should be rendered as a div', () => {
    //Arrange
    render(<MainContainer />);
    const MainContainerElement = screen.getByTestId('main-container-component');

    //Act

    //Assert
    expect(MainContainerElement).toBeInTheDocument();
  });
});
