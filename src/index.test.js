import React from 'react';
import { render, act } from '@testing-library/react';

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
});
