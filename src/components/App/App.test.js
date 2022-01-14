import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import '@testing-library/react';
import App from './App';

test('renders content', () => {
  render(<App />);
});
