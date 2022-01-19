import { act, renderHook } from '@testing-library/react-hooks';

import { ErrorMessageProvider } from '@providers/ErrorMessage';
import useFetchVideoInfo from '@src/hooks/useFetchVideoInfo.hook';
import videoInfoMockedJson from '@src/assets/mocks/googleapis-videos-mock.json';

describe('useFetchVideoInfo', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return expected value', async () => {
    await act(async () => {
      fetch.mockResponseOnce(JSON.stringify(videoInfoMockedJson));
      const { result, waitForNextUpdate } = renderHook(
        () => useFetchVideoInfo(),
        { wrapper: ErrorMessageProvider }
      );
      await waitForNextUpdate();

      const [response] = result.current;
      expect(fetch).toBeCalled();
      expect(response).toEqual(videoInfoMockedJson);
    });
  });
});
