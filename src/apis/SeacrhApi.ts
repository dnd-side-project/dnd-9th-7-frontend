import { client } from '@/apis/client';
import { GetMusicDataResponse, GetPlayDataResponse } from '@/apis/types';

export const SearchApi = {
  getMusicData: async (query: string, offset: number) => {
    const response = await client.get<GetMusicDataResponse>('/api/music', {
      params: {
        query,
        offset,
      },
    });
    return response.data;
  },
  getPlayData: async (query: string) => {
    const response = await client.get<GetPlayDataResponse>('/api/youtube', {
      params: {
        query,
      },
    });
    return response.data;
  },
};
