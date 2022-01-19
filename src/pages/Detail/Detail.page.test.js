import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import DetailPage from '../Detail/Detail.page';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../components/Context/AppContext';

describe('test', () => {
  test('DetailPage', () => {
    act(() => {
      render(
        <AppContext.Provider
          value={{ addVideoToFavorite: jest.fn(), favoritesList: [] }}
        >
          <Router>
            <DetailPage />
          </Router>
        </AppContext.Provider>
      );
    });
    const start = screen.getByTestId('start');

    expect(start).toBeInTheDocument();

    fireEvent.click(start);
    expect(start.classList.contains('favorite')).toBe(true);
  });
});
