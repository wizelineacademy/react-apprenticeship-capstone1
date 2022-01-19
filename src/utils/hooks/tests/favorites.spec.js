import { renderHook, act } from '@testing-library/react-hooks';
import { screen } from '@testing-library/react';
import useFavorites from '../useFavorites';

describe.skip('useFetch testing', () => {
  test('call function for request', () => {
    const { result } = renderHook(useFavorites);
    act(() => {
      result.currrent.isfavorited();
    });
    screen.debug(result);
    expect(result).toBeTruthy();
  });
});
