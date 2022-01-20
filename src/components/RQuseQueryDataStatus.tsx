// 04. useQuery에서 isFetched는 쿼리 가져오기가 완료되면 true가 된다.
// cacheTime은 기본 5분이며, 지정된 시간이 경과하면 쿼리키가 제거된다. devtools에서 키값이 삭제된것을 확인할 수 있다.
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

// 잘못된 url 입력시 에러 발생
const fetchData = () => axios.get('http://localhost:4002/user_model');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryDataStatus() {
  // any : axios Promise 타입
  const { isLoading, data, isError, error, isFetched } = useQuery<AxiosResponse<any, any>, Error>(
    'RQ-cache',
    fetchData,
    {
      cacheTime: 5000, // 캐시 5초만 유지하며, 다른 페이지 방문시 시간이 경과하면 캐시된 데이터가 제거된다. 재방문시 다시 로딩한다.
      // staleTime: 30000, // 데이터 가져오기(isFetched = true)를 30초 동안 하지 않는다. 데이터 실시간으로 가져 오지 않으므로 네트워크 트래픽 줄인다.
      // refetchOnMount: true,
      // refetchOnWindowFocus:true,
      // refetchInterval:2000, // 2초 마다 데이터를 refetch 한다.
      // refetchIntervalInBackground:true // 백그라운드 refetch 한다. 브러우저에 포커스 되어 있지 않아도 refatch 한다.
    },
  );

  console.log({ isLoading, isFetched });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error!.message}</h2>;
  }
  return (
    <>
      <h2>RQ-cache Users List</h2>
      {data?.data.map((user: DataType) => (
        <div key={user.id}>{user.user}</div>
      ))}
    </>
  );
}

export default RQuseQueryDataStatus;
