import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Switch from '@components/Switch';

const mockedOnChange = jest.fn();

describe('Switch...', () => {
  beforeEach(() => {
    render(
      <Switch
        testId="switch-component"
        label="label-test"
        value={true}
        onChange={mockedOnChange}
      />
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('switch-component')).toBeInTheDocument();
  });

  it('should render label prop', () => {
    expect(screen.queryByText('label-test')).toBeInTheDocument();
  });

  it('should change checked value', () => {
    expect(screen.queryByRole('checkbox')).toBeChecked(true);
  });

  it('should call onChange prop when clicked', () => {
    userEvent.click(screen.queryByRole('checkbox'));
    expect(mockedOnChange).toHaveBeenCalledTimes(1);
  });
});
