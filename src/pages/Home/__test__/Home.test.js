import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '@providers/Search';

import { AuthProvider } from '@providers/Auth';
import HomePage from '@pages/Home';

describe('HomePage...', () => {
  it('should render', async () => {
    await act(async () => {
      render(
        <SearchProvider>
          <BrowserRouter>
            <AuthProvider defaultAuthenticated={true}>
              <HomePage data-testid="home-page" />
            </AuthProvider>
          </BrowserRouter>
        </SearchProvider>
      );

      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });
});
