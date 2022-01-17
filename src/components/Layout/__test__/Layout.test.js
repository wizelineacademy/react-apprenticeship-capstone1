import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '@providers/Auth';
import { ThemeProvider } from '@providers/Theme';
import { SearchProvider } from '@providers/Search';
import Layout from '@components/Layout';

describe('Input...', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthProvider defaultAuthenticated={false}>
          <ThemeProvider>
            <SearchProvider>
              <Layout>
                <i>Children</i>
              </Layout>
              <Routes>
                <Route exact path="/" element={<i>Home view</i>} />
              </Routes>
            </SearchProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('layout-component')).toBeInTheDocument();
  });

  it('should be visible', () => {
    expect(screen.getByTestId('layout-component')).toBeVisible();
  });

  it('should contain a header', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should contain sidebar', () => {
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should sidebar be invisible by default', () => {
    expect(screen.getByTestId('sidebar')).not.toHaveClass('sidebar--open');
  });

  it('should sidebar be visible after clicking sidebar button', () => {
    fireEvent.click(screen.getByTestId('header__sidebar-button'));
    expect(screen.getByTestId('sidebar')).toBeVisible();
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar--open');
  });
});
