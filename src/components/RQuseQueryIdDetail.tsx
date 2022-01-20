// 08. Query by id detail page
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRQuserDetail } from '../hooks/useRQHooks';

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryIdDetail() {
  const { userId } = useParams();
  const { isLoading, data, isError, error } = useRQuserDetail(userId);

  const userData: DataType = data?.data;

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error!.message}</h2>;
  }
  return (
    <>
      <h2>RQuseQueryId Detail</h2>
      <div>name : {userData.name}</div>
      <div>password : {userData.password}</div>
      <div>user : {userData.user}</div>
    </>
  );
}

export default RQuseQueryIdDetail;
