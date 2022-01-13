import { render } from '@testing-library/react';
import Card from './Card.component';

describe('show card component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});
