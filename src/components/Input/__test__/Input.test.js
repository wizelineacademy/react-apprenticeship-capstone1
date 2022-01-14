import { render, screen, fireEvent } from '@testing-library/react';

import Input from '@components/Input';

const mockedOnChange = jest.fn();

describe('Input...', () => {
  beforeEach(() => {
    render(
      <Input
        label="Input label"
        type="text"
        value="text-value"
        onChange={mockedOnChange}
      />
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('input-component')).toBeInTheDocument();
  });

  it('should be visible', () => {
    expect(screen.getByTestId('input-component')).toBeVisible();
  });

  it('should render its label text element', () => {
    expect(screen.getByText(/input label/i)).toBeInTheDocument();
  });

  it('should set a type', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should set a value', () => {
    expect(screen.getByRole('textbox')).toHaveValue('text-value');
  });

  it('should call onChange when typing in the input', () => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'modified-text-value' },
    });
    expect(mockedOnChange).toBeCalled();
  });
});
