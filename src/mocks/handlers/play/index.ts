import { rest } from 'msw';

export const getPosts = rest.get('/api/youtube', (req, res, ctx) =>
  res(
    ctx.json({
      status: 200,
      message: '유튜브 영상 조회 완료',
      data: {
        nextPageToken: 'CDIQAA',
        prevPageToken: 'CBkQAQ',
        items: [
          {
            id: {
              videoId: 'yTsINmrAK4I',
            },
            snippet: {
              publishedAt: '2023-08-11T04:00:02Z',
              title: 'V &#39;Rainy Days&#39; Official MV',
              channelTitle: 'HYBE LABELS',
            },
          },
          {
            id: {
              videoId: 'oLV9U-YAzDU',
            },
            snippet: {
              publishedAt: '2023-08-11T04:00:02Z',
              title: '너의 이름은 ost',
              channelTitle: '너의 이름은 짱',
            },
          },
        ],
      },
    }),
  ),
);
