import VideoCard from './VideoCard.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('VideoCard component', () => {
  it('should be rendered as an article element', () => {
    //Arrange
    render(<VideoCard />);
    const VideoCardElement = screen.getByRole('article');

    //Act

    //Assert
    expect(VideoCardElement).toBeInTheDocument();
  });

  it('should display the passed title', () => {
    //Arrange
    render(<VideoCard title="hello world" />);
    const VideoCardElement = screen.getByText('hello world');

    //Act

    //Assert
    expect(VideoCardElement).toBeInTheDocument();
  });

  it('should display the passed description', () => {
    //Arrange
    render(<VideoCard description="test description" />);
    const VideoCardElement = screen.getByTestId('video-card-component');

    //Act

    //Assert
    expect(VideoCardElement).toBeInTheDocument();
  });

  it('should display the passed image url', () => {
    //Arrange
    render(
      <VideoCard imgsrc="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" />
    );
    const VideoCardThumbnail = screen.getByTestId('video-card-thumbnail');

    //Act

    //Assert
    expect(VideoCardThumbnail).toBeInTheDocument();
  });
});
