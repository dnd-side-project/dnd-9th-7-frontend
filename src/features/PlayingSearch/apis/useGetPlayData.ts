/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { SearchApi } from '@/shared/common/apis';

export const useGetPlayData = (value: string) => {
  const { data } = useQuery({
    queryKey: useGetPlayData.queryKey(value),
    queryFn: () => SearchApi.getPlayData(value),
    select: (playData) => playData.data.items,
  });

  return { data };
};

useGetPlayData.queryKey = (value: string) => ['getPlayData', value] as const;
