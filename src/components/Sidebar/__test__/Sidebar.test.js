import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '@providers/Auth';
import Sidebar from '@components/Sidebar';

describe('SearchBar...', () => {
  describe('when user logged in', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider
            defaultAuthenticated={true}
            defaultUserInfo={{ username: 'test-username', image: null }}
          >
            <Sidebar />
          </AuthProvider>
          <Routes>
            <Route exact path="/" element={<i>Home view</i>} />
            <Route exact path="/favorites" element={<i>Favorites view</i>} />
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
    it('should home button redirect to home page', () => {});
    it('should show logout modal when clicking logout button', () => {});
    it('should favorites button redirect to favorites page', () => {});
    it('should show favorites and logout buttons', () => {});
  });

  describe('when user not logged in', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AuthProvider defaultAuthenticated={false}>
            <Sidebar />
          </AuthProvider>
          <Routes>
            <Route exact path="/" element={<i>Home view</i>} />
            <Route exact path="/favorites" element={<i>Favorites view</i>} />
          </Routes>
        </BrowserRouter>
      );
    });

    it('should show login modal when clicking login button', () => {});
    it('should hide favorites and login buttons', () => {});
  });
});
