import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchData = () => axios.get('http://localhost:4002/user_model1');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryStatus() {
  const { status, data, error } = useQuery<any, Error>('useQueryError', fetchData);

  if (status === 'loading') {
    return <h2>Loading</h2>;
  }
  if (status === 'error') {
    return <h2>{error!.message}</h2>;
  }
  return (
    <>
      <h2>Users List</h2>
      {data?.data.map((user: DataType) => (
        <div key={user.id}>{user.user}</div>
      ))}
    </>
  );
}

export default RQuseQueryStatus;
