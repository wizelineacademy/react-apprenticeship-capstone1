import React from 'react';
import { render, screen, act } from '@testing-library/react';
import VideosContainer from './VideosContainer';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const url = 'https://api.backend.dev/youtube/v3/search';

const apiVideosResponse = rest.get(url, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        kind: 'youtube#searchListResponse',
        etag: 'IWKgn1gmkjUswPrW3HlhWJeJn5M',
        nextPageToken: 'CA8QAA',
        regionCode: 'ES',
        pageInfo: {
          totalResults: 1000000,
          resultsPerPage: 15,
        },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: 'ZwCa3vnIkcuoKJ4IljLvmmR6ZjE',
            id: {
              kind: 'youtube#channel',
              videoId: 'w7ejDZ8SWv8',
            },
            snippet: {
              publishedAt: '2007-06-04T09:55:54Z',
              channelId: 'UC0v-tlzsn0QZwJnkiaUSJVQ',
              title: 'REACT',
              description:
                'Welcome to REACT! From our award-winning REACT series, to shows across scripted, unscripted, animation, interactive, TV ...',
              thumbnails: {
                default: {
                  url: 'https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s88-c-k-c0xffffffff-no-rj-mo',
                },
                medium: {
                  url: 'https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s240-c-k-c0xffffffff-no-rj-mo',
                },
                high: {
                  url: 'https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s800-c-k-c0xffffffff-no-rj-mo',
                },
              },
              channelTitle: 'REACT',
              liveBroadcastContent: 'upcoming',
              publishTime: '2007-06-04T09:55:54Z',
            },
          },
        ],
      },
    ])
  );
});

const server = new setupServer(apiVideosResponse);

beforeAll(() => server.listen());
afterAll(() => server.resetHandlers());
afterAll(() => server.close());

describe('VideosContainer Component', () => {
  test('Component renders', () => {
    act(() => {
      render(<VideosContainer url={url} />);
    });
  });
  test('Loading... appear in the screen while fetching data', () => {
    act(() => {
      render(<VideosContainer url={url} />);
      screen.debug();
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
