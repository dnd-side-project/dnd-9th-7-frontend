import { rest } from 'msw';

export const getPosts = rest.get('/api/log/myplaylist', (req, res, ctx) =>
  res(
    ctx.json({
      status: 200,
      message: '마이플레이리스트 필터 결과 조회 완료',
      data: {
        feelingColor: '7744E4',
        timeColor: 'E9FFAC',
        weatherColor: '59FFCD',
        seasonColor: 'BDFF89',
        dateRangeText: '2023.10.22 - 2023.10.25',
        filterText: '신나고 맑은 봄 아침에 기록한 음악',
        randomMyPlaylistDtoList: [
          {
            albumImageUrl: 'https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a3a9babaf8af',
            artists: ['NewJeans'],
            name: 'Super Shy',
          },
          {
            albumImageUrl: 'https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a3a9babaf8af',
            artists: ['NewJeans'],
            name: 'Ditto',
          },
          {
            albumImageUrl: 'images/asdf',
            artists: ['김'],
            name: '김',
          },
          {
            albumImageUrl: 'images/asdf',
            artists: ['김'],
            name: '김',
          },
          {
            albumImageUrl: 'images/asdf',
            artists: ['김'],
            name: '김',
          },
        ],
      },
    }),
  ),
);
