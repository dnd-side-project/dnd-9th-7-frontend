/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { SearchApi } from '@/apis/SeacrhApi';

export const useGetPlayData = (value: string) => {
  const { data } = useQuery({
    queryKey: useGetPlayData.queryKey(value),
    queryFn: () => SearchApi.getPlayData(value), // api.getMusicData 메서드는 실제 음악 데이터를 가져오는 API 호출을 처리합니다.
    select: (data) => data.data.items,
  });

  return { data };
};

useGetPlayData.queryKey = (value: string) => ['getPlayData', value] as const;
