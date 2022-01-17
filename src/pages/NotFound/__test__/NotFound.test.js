import { render, screen } from '@testing-library/react';

import NotFound from '@pages/NotFound';

describe('HomePage...', () => {
  beforeEach(() => {
    render(<NotFound data-testid="not-found-page" />);
  });

  it('should render', () => {
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
