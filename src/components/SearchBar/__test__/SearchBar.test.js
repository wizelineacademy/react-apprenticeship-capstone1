import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { SearchProvider } from '@providers/Search';
import SearchBar from '@components/SearchBar';

const onFocusChange = jest.fn();

describe('SearchBar...', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SearchProvider>
          <SearchBar onFocusChange={onFocusChange} />
        </SearchProvider>
      </BrowserRouter>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  });

  it('should change input value when typing', () => {
    fireEvent.change(screen.getByPlaceholderText(/.*search.*/i), {
      target: { value: 'typing-test' },
    });
    expect(screen.getByPlaceholderText(/.*search.*/i)).toHaveValue(
      'typing-test'
    );
  });
});
