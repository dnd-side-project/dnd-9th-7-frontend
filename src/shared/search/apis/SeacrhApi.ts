import { client, GetMusicDataResponse, GetPlayDataResponse } from '@/shared/common/apis';
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
