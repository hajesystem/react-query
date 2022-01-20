/* eslint-disable no-unused-vars */
// custom hook
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

const fetchData = () => axios.get('http://localhost:4002/user_model');

export const useRQusers = (onSuccess: (d: any) => void, onError: (e: any) => void) =>
  useQuery<AxiosResponse<any, any>, Error>('customHook', fetchData, {
    onSuccess,
    onError,
  });

// 08. Query by id custom Hook
const fetchDataId = (userId: any) => axios.get(`http://localhost:4002/user_model/${userId}`);

export const useRQuserDetail = (userId: any) =>
  useQuery<AxiosResponse<any, any>, Error>(['customHook-id', userId], () => fetchDataId(userId));
