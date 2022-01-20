// 06. callback
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchData = () => axios.get('http://localhost:4002/user_model');

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQuseQueryCallback() {
  // callback funtion
  const onSuccess = (data: any) => console.log('success callback', data);
  const onError = (error: any) => console.log('error callback', error);

  const { isLoading, data: callback } = useQuery<AxiosResponse<any, any>>('RQ-Callback', fetchData, {
    // callback
    onSuccess,
    onError,
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>RQ-Callback console.log callback</h2>
      {callback?.data.map((user: DataType) => (
        <div key={user.id}>{user.password}</div>
      ))}
    </>
  );
}

export default RQuseQueryCallback;
