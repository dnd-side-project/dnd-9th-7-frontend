/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { SearchApi } from '@/apis/SeacrhApi';


export const useGetMusicData = (value: string) => {
  const { data } = useQuery({
    queryKey: useGetMusicData.queryKey(value),
    queryFn: () => SearchApi.getMusicData(value, 1), // api.getMusicData 메서드는 실제 음악 데이터를 가져오는 API 호출을 처리합니다.
    select: (data) => data[0].tracks.items,
  });

  return { data };
};

useGetMusicData.queryKey = (value: string) => ['getMusicData', value] as const;
