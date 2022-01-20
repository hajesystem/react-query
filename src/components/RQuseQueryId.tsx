// 08. Query by id main page
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const fetchData = () => axios.get('http://localhost:4002/user_model');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryId() {
  const { isLoading, data } = useQuery('useQuery', fetchData);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <h2>useQuery Query id Users List</h2>
      {data?.data.map((user: DataType) => (
        <div key={user.id}>
          <Link to={`/useQueryId/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </>
  );
}

export default RQuseQueryId;
