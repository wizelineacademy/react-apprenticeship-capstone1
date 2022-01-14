import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthProvider } from '@providers/Auth';
import LogoutModal from '@components/LogoutModal';

const mockedCloseModal = jest.fn();

describe('LogoutModal...', () => {
  beforeEach(() => {
    render(
      <AuthProvider defaultAuthenticated={false}>
        <LogoutModal closeModal={mockedCloseModal} />
      </AuthProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('logout-modal-component')).toBeInTheDocument();
  });

  it('should login state change when clicking logout button', () => {
    userEvent.click(screen.getByRole('button', { name: /.*logout.*/i }));
    expect(mockedCloseModal).toHaveBeenCalled();

    // TODO: find a way to verify that the user has been logged out in the auth provider
  });

  it('should call closeModal when clicking cancel button', () => {
    userEvent.click(screen.getByRole('button', { name: /.*cancel.*/i }));
    expect(mockedCloseModal).toHaveBeenCalled();
  });
});
