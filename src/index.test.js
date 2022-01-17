import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '@components/App';

describe('App...', () => {
  it('should render', async () => {
    await act(async () => {
      const { getByTestId } = await render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );

      expect(getByTestId('layout-component')).toBeInTheDocument();
    });
  });

  it('should call fetch when typing enter', async () => {
    await act(async () => {
      const { getByPlaceholderText } = await render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );

      userEvent.type(getByPlaceholderText(/.*search.*/i), 'typing-test{enter}');
      global.fetch = jest.fn();
      expect(global.fetch).toBeCalledTimes(1);
    });
  });
});
