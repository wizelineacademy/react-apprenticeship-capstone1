import { act, renderHook } from '@testing-library/react-hooks';

import useFetchRelated from '@src/hooks/useFetchRelated.hook';
import searchMockedJson from '@src/assets/mocks/googleapis-search-mock.json';

describe('useFetchRelated', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return expected value', async () => {
    await act(async () => {
      fetch.mockResponseOnce(JSON.stringify(searchMockedJson));
      const { result, waitForNextUpdate } = await renderHook(() => useFetchRelated());
      await waitForNextUpdate();

      const [response] = result.current;
      expect(fetch).toBeCalled();
      expect(response).toEqual(searchMockedJson);
    });
  });
})