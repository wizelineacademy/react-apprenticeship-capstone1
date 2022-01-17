import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@providers/Auth';
import HomePage from '@pages/Home';

describe('HomePage...', () => {
  it('should render', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AuthProvider defaultAuthenticated={true}>
            <HomePage data-testid="home-page" />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });
});
