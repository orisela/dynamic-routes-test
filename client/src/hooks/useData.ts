import { useState, useEffect } from 'react';
import { getData } from '../services/data';

type Data = any;

const useData = (service: string) => {
  const [data, setData] = useState([] as Data[]);

  useEffect(() => {
    getData(service).then(setData);
  }, []);

  return { data };
};

export default useData;
