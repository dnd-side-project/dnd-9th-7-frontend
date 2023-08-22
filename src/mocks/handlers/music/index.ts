import { rest } from 'msw';

export const getPosts = rest.get('/api/music', (req, res, ctx) =>
  res(
    ctx.json([
      {
        tracks: {
          offset: 1,
          total: 10,
          items: [
            {
              id: 'track01',
              name: 'hype boy',
              album: {
                id: 'album01',
                name: 'SuperShy',
                totalTracks: 6,
                releaseDate: '2023-07',
                releaseDatePrecision: 'MONTH',
                images: [
                  {
                    url: 'https://picsum.photos/236/354',
                    width: 500,
                    height: 500,
                  },
                ],
              },
              artists: [
                {
                  id: 'artist01',
                  name: 'NewJeans',
                  images: [],
                },
              ],
            },
            {
              id: 'track02',
              name: 'SuperShy',
              album: {
                id: 'album01',
                name: 'SuperShy',
                totalTracks: 6,
                releaseDate: '2023-07',
                releaseDatePrecision: 'MONTH',
                images: [
                  {
                    url: 'https://picsum.photos/236/354',
                    width: 500,
                    height: 500,
                  },
                ],
              },
              artists: [
                {
                  id: 'artist01',
                  name: 'NewJeans',
                  images: [],
                },
              ],
            },
          ],
        },
      },
    ]),
  ),
);
