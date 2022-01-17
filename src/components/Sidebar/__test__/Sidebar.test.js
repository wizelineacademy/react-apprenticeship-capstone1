import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { AuthProvider } from '@providers/Auth';
import { ThemeProvider } from '@providers/Theme';
import Sidebar from '@components/Sidebar';

const mockedSetIsSideBarOpen = jest.fn();

describe('SearchBar...', () => {
  describe('when user logged in', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider
            defaultAuthenticated={true}
            defaultUserInfo={{ username: 'test-username', image: null }}
          >
            <ThemeProvider>
              <Sidebar setIsSideBarOpen={mockedSetIsSideBarOpen} />
            </ThemeProvider>
          </AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={<i data-testid="home-page">Home view</i>}
            />
            <Route
              exact
              path="/favorites"
              element={<i data-testid="favorites-page">Favorites view</i>}
            />
          </Routes>
        </BrowserRouter>
      );
    });

    it('should render', () => {
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('should render user image', () => {
      expect(screen.getByAltText(/.*avatar.*/i)).toBeInTheDocument();
    });

    it('should render user username', () => {
      expect(screen.getByText(/test-username/i)).toBeInTheDocument();
    });

    it('should home button redirect to home page', () => {
      userEvent.click(screen.getByRole('button', { name: /.*home.*/i }));
      expect(screen.queryByTestId('home-page')).toBeInTheDocument();
    });

    it('should favorites button redirect to favorites page', () => {
      userEvent.click(screen.getByRole('button', { name: /.*favorites.*/i }));
      expect(screen.queryByTestId('favorites-page')).toBeInTheDocument();
    });

    it('should show logout modal when clicking logout button', () => {
      userEvent.click(screen.getByRole('button', { name: /.*logout.*/i }));
      expect(
        screen.queryByTestId('logout-modal-component')
      ).toBeInTheDocument();
    });

    it('should show favorites and logout buttons', () => {
      expect(
        screen.getByRole('button', { name: /.*logout.*/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /.*favorites.*/i })
      ).toBeInTheDocument();
    });

    it('should change theme when clicking theme button', () => {
      userEvent.click(screen.getByRole('button', { name: /.*logout.*/i }));
      expect(
        screen.queryByTestId('logout-modal-component')
      ).toBeInTheDocument();
    });

    it('should change theme when clicking theme button', () => {
      userEvent.click(screen.getByLabelText(/.*dark.*theme.*/i));
      expect(screen.getByLabelText(/.*dark.*theme.*/i)).toBeChecked();
    });

    it('should change theme when clicking theme button', () => {
      userEvent.click(screen.getByTestId('sidebar__close'));
      expect(mockedSetIsSideBarOpen).toHaveBeenCalledTimes(1);
    });
  });

  describe('when user not logged in', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider defaultAuthenticated={false}>
            <ThemeProvider>
              <Sidebar />
            </ThemeProvider>
          </AuthProvider>
          <Routes>
            <Route exact path="/" element={<i>Home view</i>} />
            <Route exact path="/favorites" element={<i>Favorites view</i>} />
          </Routes>
        </BrowserRouter>
      );
    });

    it('should show login modal when clicking login button', () => {
      userEvent.click(screen.getByRole('button', { name: /.*login.*/i }));
      expect(screen.queryByTestId('login-modal-component')).toBeInTheDocument();
    });
    it('should hide favorites and login buttons', () => {
      expect(
        screen.queryByRole('button', { name: /.*logout.*/i })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /.*favorites.*/i })
      ).not.toBeInTheDocument();
    });
  });
});
