import { screen, render, fireEvent } from '@testing-library/react';
import Header from '../components/Header/Header.component';
import React from 'react';

describe('Testing the component elements', () => {
  const setState = jest.fn();

  render(<Header></Header>);
  it('Text input should be present', () => {
    const input = screen.getByTestId('header-input-search');
    expect(input).toBeInTheDocument();
  });

  it('Login button should be present', () => {
    render(<Header></Header>);
    const button = screen.getByTestId('header-btn-login');
    expect(button).toBeInTheDocument();
  });

  it('Switch input should be present', () => {
    render(<Header></Header>);
    const switchInput = screen.getByTestId('header-input-switch');
    expect(switchInput).toBeInTheDocument();
  });

  it('Switch input should have default value', () => {
    render(<Header></Header>);
    const switchInput = screen.getByTestId('header-input-switch');
    expect(switchInput.value).toEqual('on');
  });

  it('Search input should change value', () => {
    render(<Header setSearchTerm={setState}></Header>);
    const input = screen.getByTestId('header-input-search');

    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toEqual('23');
  });
});
