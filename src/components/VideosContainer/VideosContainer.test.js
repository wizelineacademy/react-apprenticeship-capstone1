import VideosContainer from './VideosContainer.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import videos from '../../mockvideos/youtube-mock-videos.json';

describe('VideosContainer component', () => {
  it('should be rendered as a div', () => {
    //Arrange
    render(<VideosContainer videos={videos} />);

    const VideosContainerElement = screen.getByTestId(
      'videos-container-component'
    );

    //Act

    //Assert
    expect(VideosContainerElement).toBeInTheDocument();
  });
});
