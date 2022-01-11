import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import '@testing-library/react';
import Button from './Button.component';

test('renders content', () => {
  const component = render(<Button></Button>);
  component.getByText('Dark Mode');
});
