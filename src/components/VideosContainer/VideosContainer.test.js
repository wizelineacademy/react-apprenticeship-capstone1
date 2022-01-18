import React from 'react';
import { render, screen, act } from '@testing-library/react';
import VideosContainer from './VideosContainer';

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';


const mockVideos = {
  kind: "youtube#searchListResponse",
  etag: "IX9ylLkZxRpr9ieFhROx4PDKsy0",
  nextPageToken: "CA8QAA",
  regionCode: "MX",
  pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 15
  },
  items: [
      {
          kind: "youtube#searchResult",
          etag: "kjAvGptLwflpAAkDfoMUEhsPS3U",
          id: {
              kind: "youtube#video",
              videoId: "EMk6nom1aS4"
          },
          snippet: {
              publishedAt: "2021-04-23T16:45:14Z",
              channelId: "UCJgGc8pQO1lv04VXrBxA_Hg",
              title: "APRENDE REACT BÁSICO en 30 MINUTOS ⏰  - Tutorial de React.js Desde Cero",
              description: "Aprende React.js en poco tiempo con una introducción a los fundamentos de la librería para empezar a trabajar con ella.",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/EMk6nom1aS4/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/EMk6nom1aS4/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/EMk6nom1aS4/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "Carlos Azaustre - Aprende JavaScript",
              liveBroadcastContent: "none",
              publishTime: "2021-04-23T16:45:14Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "YRCj4d4PfvjdT98IflopO-277M4",
          id: {
              kind: "youtube#video",
              videoId: "lWQ69WX7-hA"
          },
          snippet: {
              publishedAt: "2019-06-10T23:00:02Z",
              channelId: "UCP15FVAA2UL-QOcGhy7-ezA",
              title: "¿Qué es React.js y cómo funciona?",
              description: "React.js es una librería para crear interfaces web, con ella están construidas las dos redes sociales más grandes: Facebook e ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/lWQ69WX7-hA/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/lWQ69WX7-hA/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/lWQ69WX7-hA/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "EDteam",
              liveBroadcastContent: "none",
              publishTime: "2019-06-10T23:00:02Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "UzxbftiPkduf30kvf8zOp1sZYiQ",
          id: {
              kind: "youtube#video",
              videoId: "zIY87vU33aA"
          },
          snippet: {
              publishedAt: "2019-06-24T21:48:56Z",
              channelId: "UCX9NJ471o7Wie1DQe94RVIg",
              title: "Reactjs, Curso Práctico para Principiantes (React 16)",
              description: "EXPO, SDK De React para desarrollo de Apps Link ➞ https://bit.ly/3jdjnST Aprende a crear aplicaciones web Frontend usando ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/zIY87vU33aA/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/zIY87vU33aA/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/zIY87vU33aA/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "Fazt",
              liveBroadcastContent: "none",
              publishTime: "2019-06-24T21:48:56Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "KywX1YhbRdca6Cm73os99043LOY",
          id: {
              kind: "youtube#video",
              videoId: "tiGDJXv2VLw"
          },
          snippet: {
              publishedAt: "2022-01-17T22:08:16Z",
              channelId: "UCAQiw3lW0k1haXD1-kuo6qQ",
              title: "CHEZAME &amp; SXIN React | D-low | Judge Show | Beatbox To World Live 2021",
              description: "Chezame and SXIN react to @Korea Beatbox TV @Dlow Beatbox Get your Merch at: https://clop-shop.com Subscribe to @SXIN ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/tiGDJXv2VLw/default_live.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/tiGDJXv2VLw/mqdefault_live.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/tiGDJXv2VLw/hqdefault_live.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "Chezame",
              liveBroadcastContent: "upcoming",
              publishTime: "2022-01-17T22:08:16Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "dbJU7hsBXSM696LkhbcaPvlncns",
          id: {
              kind: "youtube#video",
              videoId: "PLAb54MHt4o"
          },
          snippet: {
              publishedAt: "2022-01-17T19:22:52Z",
              channelId: "UCbwPk5VS7oV1fWvBpkMoXUQ",
              title: "Hashiras react to daki vs Nezuko||2/2||^^",
              description: "Bro actually it was 4/3 lol long bc i cut the Epicsode but it got banned probably I'm not allowed to use it well anyways sorry if it's ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/PLAb54MHt4o/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/PLAb54MHt4o/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/PLAb54MHt4o/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "XvxTerezaXvx",
              liveBroadcastContent: "none",
              publishTime: "2022-01-17T19:22:52Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "Tsktk29o78by79nrNuDQE7VKDvM",
          id: {
              kind: "youtube#video",
              videoId: "w7ejDZ8SWv8"
          },
          snippet: {
              publishedAt: "2021-01-18T19:01:11Z",
              channelId: "UC29ju8bIPH5as8OGnQzwJyA",
              title: "React JS Crash Course",
              description: "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "Traversy Media",
              liveBroadcastContent: "none",
              publishTime: "2021-01-18T19:01:11Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "caKdB1slKf0b16pYUBuilW_9MhQ",
          id: {
              kind: "youtube#video",
              videoId: "NI6TVVHMO8w"
          },
          snippet: {
              publishedAt: "2021-09-03T16:00:12Z",
              channelId: "UC0v-tlzsn0QZwJnkiaUSJVQ",
              title: "Do Parents Know Teen Slang? (2021) | React",
              description: "Do parents know popular teen slang? Watch to find out and see their teens' reactions. Check out more episodes of Teens and ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/NI6TVVHMO8w/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/NI6TVVHMO8w/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/NI6TVVHMO8w/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "REACT",
              liveBroadcastContent: "none",
              publishTime: "2021-09-03T16:00:12Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "Pp3BIXn_fKWKOkCti1hN-uEdTOM",
          id: {
              kind: "youtube#video",
              videoId: "Ke90Tje7VS0"
          },
          snippet: {
              publishedAt: "2018-07-16T16:51:44Z",
              channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
              title: "React JS - React Tutorial for Beginners",
              description: "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! Want to master React?",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "Programming with Mosh",
              liveBroadcastContent: "none",
              publishTime: "2018-07-16T16:51:44Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "wdm_UflMRIu2_C-O5hl6tpKczgY",
          id: {
              kind: "youtube#video",
              videoId: "GNrdg3PzpJQ"
          },
          snippet: {
              publishedAt: "2021-08-09T12:00:05Z",
              channelId: "UCDzGdB9TTgFm8jRXn1tBdoA",
              title: "React JS фундаментальный курс от А до Я",
              description: "React Полный курс от А до Я. Рассмотрим основные концепции и разработаем функционал, который встречается в ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/GNrdg3PzpJQ/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/GNrdg3PzpJQ/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/GNrdg3PzpJQ/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "Ulbi TV",
              liveBroadcastContent: "none",
              publishTime: "2021-08-09T12:00:05Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "1qh5y_9CHfU-TMO14X_iL0ynNz8",
          id: {
              kind: "youtube#video",
              videoId: "zAYFNGA5zLM"
          },
          snippet: {
              publishedAt: "2022-01-15T14:00:33Z",
              channelId: "UC0v-tlzsn0QZwJnkiaUSJVQ",
              title: "Deadliest Female Serial Killers Of All Time | React",
              description: "We react to the top 5 deadliest female serial killers of all time from all over the world. Check out more true crime reactions here: ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/zAYFNGA5zLM/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/zAYFNGA5zLM/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/zAYFNGA5zLM/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "REACT",
              liveBroadcastContent: "none",
              publishTime: "2022-01-15T14:00:33Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "y_jWkj14m8IiGsLQGkHQSgOWVwI",
          id: {
              kind: "youtube#video",
              videoId: "kl2-XvOWQl4"
          },
          snippet: {
              publishedAt: "2022-01-17T17:09:40Z",
              channelId: "UCPcLeZgMdaZ9Px7RjJ7zLuQ",
              title: "Spider-Man’s and Gf’s react to each other [TikTok’s]|Toby|1/3{PeterMj}",
              description: "",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/kl2-XvOWQl4/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/kl2-XvOWQl4/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/kl2-XvOWQl4/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "•Love• A",
              liveBroadcastContent: "none",
              publishTime: "2022-01-17T17:09:40Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "FG8mklB7-udNgk9_lh3-Qs7iOrE",
          id: {
              kind: "youtube#video",
              videoId: "4UZrsTqkcW4"
          },
          snippet: {
              publishedAt: "2020-10-06T14:16:07Z",
              channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
              title: "Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks",
              description: "Learn the basics of React in this comprehensive course. You will learn about fundamentals, hooks, context API, react router, ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/4UZrsTqkcW4/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/4UZrsTqkcW4/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/4UZrsTqkcW4/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "freeCodeCamp.org",
              liveBroadcastContent: "none",
              publishTime: "2020-10-06T14:16:07Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "ZwCa3vnIkcuoKJ4IljLvmmR6ZjE",
          id: {
              kind: "youtube#channel",
              channelId: "UC0v-tlzsn0QZwJnkiaUSJVQ"
          },
          snippet: {
              publishedAt: "2007-06-04T09:55:54Z",
              channelId: "UC0v-tlzsn0QZwJnkiaUSJVQ",
              title: "REACT",
              description: "Welcome to REACT! From our award-winning REACT series, to shows across scripted, unscripted, animation, interactive, TV ...",
              thumbnails: {
                  default: {
                      url: "https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s88-c-k-c0xffffffff-no-rj-mo"
                  },
                  medium: {
                      url: "https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s240-c-k-c0xffffffff-no-rj-mo"
                  },
                  high: {
                      url: "https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s800-c-k-c0xffffffff-no-rj-mo"
                  }
              },
              channelTitle: "REACT",
              liveBroadcastContent: "upcoming",
              publishTime: "2007-06-04T09:55:54Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "AiZpUf3kWtijZPk2nBeWq1rXKOE",
          id: {
              kind: "youtube#video",
              videoId: "b-wQJarohBI"
          },
          snippet: {
              publishedAt: "2019-07-22T21:00:03Z",
              channelId: "UC0v-tlzsn0QZwJnkiaUSJVQ",
              title: "Teens React To Try To Keep Eating While Watching Challenge",
              description: "Try To Keep Eating While Watching Challenge Reacted to by Teens. Original links below. Join the SuperFam and support FBE: ...",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/b-wQJarohBI/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/b-wQJarohBI/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/b-wQJarohBI/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "REACT",
              liveBroadcastContent: "none",
              publishTime: "2019-07-22T21:00:03Z"
          }
      },
      {
          kind: "youtube#searchResult",
          etag: "OUKGtBohcoVAsIjP7MQC4gpb7GI",
          id: {
              kind: "youtube#video",
              videoId: "FWEL2QIPw2w"
          },
          snippet: {
              publishedAt: "2022-01-17T19:58:57Z",
              channelId: "UC6NWcB755OVPIy3-qQ_imrQ",
              title: "MHA/BNHA react to Encanto✨[Gachaclub] (Part 1/?)",
              description: "Video Link:https://youtu.be/Yp5nPGWWMh4 This Video was Inspired  : by:@Frostieso.",
              thumbnails: {
                  default: {
                      url: "https://i.ytimg.com/vi/FWEL2QIPw2w/default.jpg",
                      width: 120,
                      height: 90
                  },
                  medium: {
                      url: "https://i.ytimg.com/vi/FWEL2QIPw2w/mqdefault.jpg",
                      width: 320,
                      height: 180
                  },
                  high: {
                      url: "https://i.ytimg.com/vi/FWEL2QIPw2w/hqdefault.jpg",
                      width: 480,
                      height: 360
                  }
              },
              channelTitle: "♡_haruko_♡",
              liveBroadcastContent: "none",
              publishTime: "2022-01-17T19:58:57Z"
          }
      }
  ]
}
const mockIsLoading = true;
const mockIsError = false;
const mockSetError = jest.fn();
const mockSetVideos = jest.fn();
const mockSetIsLoading = jest.fn();
const mockUrl = '../../../src/getVideos.json'

jest.mock('../../utils/hooks/useVideos', (mockUrl) => ({
  useVideos: () => {mockVideos, mockIsLoading, mockIsError, mockSetError, mockSetVideos, mockSetIsLoading}
}))

describe('VideosContainer Component', () => {
  test('Component renders', () => {
    act(() => {
      render(<VideosContainer url={mockUrl} />);
    });
  });
  test('Loading... appear in the screen while fetching data', () => {
    act(() => {
      render(<VideosContainer url={mockUrl} />);
      screen.debug();
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

});

//  const url = 'https://api.backend.dev/youtube/v3/search';

// const apiVideosResponse = rest.get(url, (req, res, ctx) => {
//   return res(
//     ctx.json([
//       {
//         kind: 'youtube#searchListResponse',
//         etag: 'IWKgn1gmkjUswPrW3HlhWJeJn5M',
//         nextPageToken: 'CA8QAA',
//         regionCode: 'ES',
//         pageInfo: {
//           totalResults: 1000000,
//           resultsPerPage: 15,
//         },
//         items: [
//           {
//             kind: 'youtube#searchResult',
//             etag: 'ZwCa3vnIkcuoKJ4IljLvmmR6ZjE',
//             id: {
//               kind: 'youtube#channel',
//               videoId: 'w7ejDZ8SWv8',
//             },
//             snippet: {
//               publishedAt: '2007-06-04T09:55:54Z',
//               channelId: 'UC0v-tlzsn0QZwJnkiaUSJVQ',
//               title: 'REACT',
//               description:
//                 'Welcome to REACT! From our award-winning REACT series, to shows across scripted, unscripted, animation, interactive, TV ...',
//               thumbnails: {
//                 default: {
//                   url: 'https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s88-c-k-c0xffffffff-no-rj-mo',
//                 },
//                 medium: {
//                   url: 'https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s240-c-k-c0xffffffff-no-rj-mo',
//                 },
//                 high: {
//                   url: 'https://yt3.ggpht.com/ytc/AKedOLTmodYcIhaD7hLjs5UVNv1Ccf1O8k6b2GTJNqTwyw=s800-c-k-c0xffffffff-no-rj-mo',
//                 },
//               },
//               channelTitle: 'REACT',
//               liveBroadcastContent: 'upcoming',
//               publishTime: '2007-06-04T09:55:54Z',
//             },
//           },
//         ],
//       },
//     ])
//   );
// });

// const server = new setupServer(apiVideosResponse);

// beforeAll(() => server.listen());
// afterAll(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('VideosContainer Component', () => {
//   test('Component renders', () => {
//     act(() => {
//       render(<VideosContainer url={url} />);
//     });
//   });
//   test('Loading... appear in the screen while fetching data', () => {
//     act(() => {
//       render(<VideosContainer url={url} />);
//       screen.debug();
//     });
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });
// });
