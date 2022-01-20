// 05. useQuery에서 조건에 따른 refetch
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

const fetchData = () => axios.get('http://localhost:4002/user_model');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryRefetch() {
  // data:users ==> 별칭으로 data지정
  const {
    isLoading,
    isFetched,
    isFetching,
    data: users,
    refetch,
  } = useQuery<AxiosResponse<any, any>>('RQ-refetch', fetchData, {
    enabled: false, // fetch 데이터를 가져오지 않는다.
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    refetch();
  };

  console.log({ isLoading, isFetched, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <h2>RQ-refetch user name</h2>
      <button type="button" onClick={onSubmit}>
        fetch data
      </button>
      {users?.data.map((user: DataType) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export default RQuseQueryRefetch;
