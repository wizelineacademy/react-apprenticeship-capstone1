import { render } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import React from 'react';

describe('VideoCard component', () => {
  test('img, h2 tags should be in the page', () => {
    const { getByRole } = render(<VideoCard />);
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('heading')).toBeInTheDocument();
  });
});
