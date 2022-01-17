import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchProvider } from '@providers/Search';
import Header from '@components/Header';

const setIsSideBarOpen = jest.fn();

describe('Header...', () => {
  beforeEach(() => {
    render(
      <SearchProvider>
        <BrowserRouter>
          <Header setIsSideBarOpen={setIsSideBarOpen} />
          <Routes>
            <Route exact path="/" element={<i>Home view</i>} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should be visible', () => {
    expect(screen.getByTestId('header')).toBeVisible();
  });

  it('should render a sidebar button', () => {
    expect(screen.getByTestId('header__sidebar-button')).toBeInTheDocument();
  });

  it('should render a home button', () => {
    expect(screen.getByTestId('header__home-button')).toBeInTheDocument();
  });

  it('should render a searchbar', () => {
    expect(screen.getByTestId('header__searchbar')).toBeInTheDocument();
  });

  it('should react when sidebar button is clicked', () => {
    fireEvent.click(screen.getByTestId('header__sidebar-button'));
    expect(setIsSideBarOpen).toBeCalled();
  });

  it('should go to home page when home button is clicked', () => {
    fireEvent.click(screen.getByTestId('header__home-button'));
    expect(screen.getByText(/home view/i)).toBeInTheDocument();
  });
});
