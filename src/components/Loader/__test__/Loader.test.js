import { render, screen } from '@testing-library/react';

import Loader from '@components/Loader';

describe('Loader...', () => {
  beforeEach(() => {
    render(<Loader />);
  });

  it('should render', () => {
    expect(screen.getByTestId('loader-component')).toBeInTheDocument();
  });
});
