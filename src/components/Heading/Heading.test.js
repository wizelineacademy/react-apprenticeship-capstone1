import Heading from './Heading.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Heading component', () => {
  it('should display passed title as test', () => {
    //Arrange
    render(<Heading title="hello world" />);
    const headingElement = screen.getByText('hello world');

    //Act

    //Assert
    expect(headingElement).toBeInTheDocument();
  });

  it('should be displayed as a heading', () => {
    //Arrange
    render(<Heading title="hello world" />);
    const headingElement = screen.getByRole('heading');

    //Act

    //Assert
    expect(headingElement).toBeInTheDocument();
  });

  // it('should be displayed as a h1', () => {
  //     //Arrange
  //     render(<Heading title="hello world"/>)
  //     const headingElement = screen.getByText('hello world');

  //     //Act
  //     console.log(headingElement.firstChild.)

  //     //Assert
  //     expect(headingElement.type).to.equal('h1');
  // })
});
