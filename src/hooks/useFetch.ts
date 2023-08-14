import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { TItem, TItems } from '../types/transactions';

const instance = axios.create({
    baseURL: 'http://localhost:3001/history'
})

const useFetch = () => {
  const [data, setData] = useState<TItems>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (params: string) => {
    try {
      setLoading(true);
      const response = await instance.get(params);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Hubo un error al cargar los datos.');
      setLoading(false);
    }
  };

  const addData = async (params: TItem) => {
    try {
      setLoading(true);
      // const queryString = Object.keys(params)
      // .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      // .join('&');
      // console.log('queryString --> ', queryString);
      
      const response = await instance.post('?', params);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError('Hubo un error al cargar los datos.');
      setLoading(false);
    }
  };


  return {
    data,
    loading,
    error,
    fetchData,
    addData,
  };
};

export default useFetch;
