import { GetMusicDataResponse, GetPlayDataResponse } from '@/shared/common/apis/types';
import { client } from '@/shared/common/apis/client';

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
