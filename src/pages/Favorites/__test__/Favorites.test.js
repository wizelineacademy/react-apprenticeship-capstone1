import { render, screen } from '@testing-library/react';

import FavoritesPage from '@pages/Favorites';

describe('FavoritesPage...', () => {
  beforeEach(() => {
    render(<FavoritesPage data-testid="favorites-page" />);
  });

  it('should render', () => {
    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
  });
});
