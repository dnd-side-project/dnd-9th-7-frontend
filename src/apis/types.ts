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
        images: {
          url: string;
          width: number;
          height: number;
        }[];
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
