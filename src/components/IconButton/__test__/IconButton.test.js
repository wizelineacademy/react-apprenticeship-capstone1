import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from '../IconButton.component.jsx';

const mockedClickableFunction = jest.fn();

describe('Testing IconButton...', () => {
  it('should render', () => {
    render(<IconButton icon={<i>icon</i>} />);

    let element = screen.getByTestId('icon-button');
    expect(element).toBeInTheDocument();
  });

  it('should react when is clicked', () => {
    render(<IconButton icon={<i>icon</i>} onClick={mockedClickableFunction} />);

    let element = screen.getByTestId('icon-button');
    fireEvent.click(element);
    expect(mockedClickableFunction).toBeCalled();
  });

  it('should be visible', () => {
    render(<IconButton icon={<i>icon</i>} />);

    let element = screen.getByTestId('icon-button');
    expect(element).toBeVisible();
  });
});
