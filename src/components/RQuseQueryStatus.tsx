// 03. useQuery에서 isLoading, isError 대신 status를 이용하여 loading과 error처리
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

// 잘못된 url 입력시 에러발생
const fetchData = () => axios.get('http://localhost:4002/user_model');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryStatus() {
  const { status, data, error } = useQuery<AxiosResponse<any, any>, Error>('useQueryStatus', fetchData);

  if (status === 'loading') {
    return <h2>Loading</h2>;
  }
  if (status === 'error') {
    return <h2>{error!.message}</h2>;
  }
  return (
    <>
      <h2>useQueryStatus Users List</h2>
      {data?.data.map((user: DataType) => (
        <div key={user.id}>{user.user}</div>
      ))}
    </>
  );
}

export default RQuseQueryStatus;
