import { act, renderHook } from '@testing-library/react-hooks';

import { ErrorMessageProvider } from '@providers/ErrorMessage';
import useFetchRelated from '@src/hooks/useFetchRelated.hook';
import searchMockedJson from '@src/assets/mocks/googleapis-search-mock.json';
import searchReorganizedMockedJson from '@src/assets/mocks/googleapis-reorganized-search-mock.json';

describe('useFetchRelated', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return expected value', async () => {
    await act(async () => {
      fetch.mockResponseOnce(JSON.stringify(searchMockedJson));
      const { result, waitForNextUpdate } = await renderHook(
        () => useFetchRelated(),
        { wrapper: ErrorMessageProvider }
      );
      await waitForNextUpdate();

      const [response] = result.current;
      expect(fetch).toBeCalled();
      expect(response).toEqual(searchReorganizedMockedJson);
    });
  });
});
