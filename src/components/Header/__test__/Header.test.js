import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '@components/Header';

const setIsSideBarOpen = jest.fn();
const onHomeButtonClick = jest.fn();

describe('Header...', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header setIsSideBarOpen={setIsSideBarOpen} onHomeButtonClick={onHomeButtonClick} />
      </BrowserRouter>
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

  it('should react when home button is clicked', () => {
    fireEvent.click(screen.getByTestId('header__home-button'));
    expect(onHomeButtonClick).toBeCalled();
  });
})