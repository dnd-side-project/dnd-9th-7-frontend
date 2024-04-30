/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { SearchApi } from '@/apis';

export const useGetMusicData = (value: string) => {
  const { data } = useQuery({
    queryKey: useGetMusicData.queryKey(value),
    queryFn: () => SearchApi.getMusicData(value, 1),
    select: (data) => data[0].tracks.items,
  });

  return { data };
};

useGetMusicData.queryKey = (value: string) => ['getMusicData', value] as const;
