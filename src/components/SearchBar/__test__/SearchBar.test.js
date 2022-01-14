import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '@components/SearchBar';

const onFocusChange = jest.fn();

describe('SearchBar...', () => {
  beforeEach(() => {
    render(<SearchBar onFocusChange={onFocusChange} />);
  });

  it('should render', () => {
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  });

  it('should change input value when typing', () => {
    userEvent.type(screen.getByPlaceholderText(/.*search.*/i), 'typing-test');
    expect(screen.getByPlaceholderText(/.*search.*/i)).toHaveValue(
      'typing-test'
    );
  });

  it('should call fetch when clicking typing enter', () => {
    global.fetch = jest.fn();
    expect(global.fetch).toBeCalledTimes(1);
  });
});
