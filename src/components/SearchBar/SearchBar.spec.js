import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SeachBar from './SearchBar.component';

afterEach(cleanup);
const enterMock = jest.fn();

describe('Test searchbar component', () => {
  test('Component has a input', () => {
    const { getByRole } = render(<SeachBar />);
    const input = getByRole('textbox');
    expect(input).toBeTruthy();
  });
  test('Input should be able to allow writing', () => {
    const { getByRole } = render(<SeachBar />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'zoe' } });
    expect(input.value).toBe('zoe');
  });
  test('', () => {
    const { baseElement } = render(<SeachBar />);
    expect(baseElement).toBeTruthy();
  });
  test('search bar runs a function when keypress enter', () => {
    const { getByRole } = render(<SeachBar handleSearch={enterMock} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'zoe' } });
    fireEvent.keyPress(input, { key: 'Enter', charCode: 13 });
    expect(input.value).toBe('zoe');
  });
});
