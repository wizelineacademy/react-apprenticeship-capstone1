import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import '@testing-library/react';
import Container from './Container.component';

test('renders content', () => {
  render(<Container />);
});
