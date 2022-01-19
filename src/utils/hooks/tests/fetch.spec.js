import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../useFetch';

const responseMock = {
  etag: 'asadst56ckh',
  items: [
    {
      id: {
        kind: 'video',
        videoId: '223dfg45k',
      },
      snippet: {
        title: 'test video',
        description: 'here test description video',
        thumbnails: {
          high: {
            url: 'image.png',
          },
        },
      },
    },
  ],
};

describe.skip('useFetch testing', () => {
  test('call function for request', () => {
    const { result } = renderHook(useFetch);
    act(() => {
      result.currrent.fetchData();
    });
    expect(result.current.response).toBe(responseMock);
  });

  it('should return data after fetch', async () => {
    // Mock API
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseMock.items),
      })
    );

    // Execute
    const { result, waitForNextUpdate } = renderHook(() => useFetch());
    await waitForNextUpdate();

    // Assert
    expect(result.current).toStrictEqual({
      loading: false,
      data: responseMock.items,
      error: null,
    });
  });
});
