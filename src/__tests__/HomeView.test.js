import React from 'react';
import { screen, render } from '@testing-library/react';
import HomeView from '../pages/HomeView/Homeview.page';

describe('Testing the component elements', () => {
  render(<HomeView></HomeView>);
  it('Component is rendered', () => {
    const title = screen.getByText('Welcome');
    expect(title).toBeInTheDocument();
  });
});
