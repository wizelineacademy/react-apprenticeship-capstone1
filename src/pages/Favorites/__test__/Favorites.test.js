import { render, screen } from '@testing-library/react';

import { FavoritesProvider } from '@providers/Favorites';
import FavoritesPage from '@pages/Favorites';

describe('FavoritesPage...', () => {
  beforeEach(() => {
    render(
      <FavoritesProvider>
        <FavoritesPage data-testid="favorites-page" />
      </FavoritesProvider>

    );
  });

  it('should render', () => {
    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
  });
});
