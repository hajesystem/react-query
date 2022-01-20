// 02. useQuery에서 isError, error를 사용하여 에러메세지를 랜더링
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

// 잘못된 url 입력시 에러 발생
const fetchData = () => axios.get('http://localhost:4002/user_model1');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryError() {
  // any : axios Promise 타입
  const { isLoading, data, isError, error } = useQuery<AxiosResponse<any, any>, Error>('useQueryError', fetchData);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error!.message}</h2>;
  }
  return (
    <>
      <h2>useQueryError Users List</h2>
      {data?.data.map((user: DataType) => (
        <div key={user.id}>{user.user}</div>
      ))}
    </>
  );
}

export default RQuseQueryError;
