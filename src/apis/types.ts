export interface GetMusicDataResponse {
  tracks: {
    offset: number;
    total: number;
    items: {
      id: string;
      name: string;
      album: {
        id: string;
        name: string;
        totalTracks: number;
        releaseDate: string;
        releaseDatePrecision: string;
        images: {
          url: string;
          width: number;
          height: number;
        }[];
      };
      artists: {
        id: string;
        name: string;
        images: any[]; // 예시에서는 images가 빈 배열이므로 any[]로 처리했습니다.
      }[];
    }[];
  };
}

export interface GetPlayDataResponse {
  data: {
    nextPageToken: string;
    prevPageToken: string;
    items: {
      id: {
        videoId: string;
      };
      snippet: {
        publishedAt: string;
        title: string;
        channelTitle: string;
      };
    }[];
  };
}
