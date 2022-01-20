// 07. custom hook
import React from 'react';
import { useRQusers } from '../hooks/useRQHooks';

type DataType = {
  id: number;
  user: string;
  password: string;
  name: string;
};

function RQcustomHook() {
  // callback funtion
  const onSuccess = (data: any) => console.log('success callback', data);
  const onError = (error: any) => console.log('error callback', error);

  const { isLoading, isError, data: customhook, error } = useRQusers(onSuccess, onError);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error!.message}</h2>;
  }
  return (
    <>
      <h2>RQ-custom Hook console.log callback</h2>
      {customhook?.data.map((user: DataType) => (
        <div key={user.id}>{user.user}</div>
      ))}
    </>
  );
}

export default RQcustomHook;
