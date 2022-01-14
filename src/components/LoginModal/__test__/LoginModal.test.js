import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthProvider } from '@providers/Auth';
import LoginModal from '@components/LoginModal';

const mockedCloseModal = jest.fn();

describe('LoginModal...', () => {
  beforeEach(() => {
    render(
      <AuthProvider defaultAuthenticated={false}>
        <LoginModal closeModal={mockedCloseModal} />
      </AuthProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('login-modal-component')).toBeInTheDocument();
  });

  it('should change username input on typing', () => {
    fireEvent.change(screen.getByLabelText(/.*username.*/i), {
      target: { value: 'wizeline' },
    });
    expect(screen.getByLabelText(/.*username.*/i)).toHaveValue('wizeline');
  });

  it('should change username input on typing', () => {
    fireEvent.change(screen.getByLabelText(/.*password.*/i), {
      target: { value: 'Rocks!' },
    });
    expect(screen.getByLabelText(/.*password.*/i)).toHaveValue('Rocks!');
  });

  it('should login state change when clicking login button', () => {
    userEvent.type(screen.getByLabelText(/.*username.*/i), 'wizeline');
    userEvent.type(screen.getByLabelText(/.*password.*/i), 'Rocks!');
    userEvent.click(screen.getByRole('button', { name: /.*login.*/i }));
    expect(mockedCloseModal).toHaveBeenCalled();

    // TODO: find a way to verify that the user has been logged in the auth provider
  });

  it('should call closeModal when clicking cancel button', () => {
    userEvent.click(screen.getByRole('button', { name: /.*cancel.*/i }));
    expect(mockedCloseModal).toHaveBeenCalled();
  });
});
