// 01. useQuery 이용하여 isLoading, data 사용
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchData = () => axios.get('http://localhost:4002/user_model');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQuery() {
  // useQuery('unique queryKey', callback funtion)
  const { isLoading, data } = useQuery('useQuery', fetchData);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <h2>useQuery Users List</h2>
      {data?.data.map((user: DataType) => (
        <div key={user.id}>{user.user}</div>
      ))}
    </>
  );
}

export default RQuseQuery;
