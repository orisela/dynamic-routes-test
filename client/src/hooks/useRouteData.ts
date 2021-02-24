import { useState, useEffect } from 'react';
import { getRouteData } from '../services/route-data';

type Data = any;

const useRouteData = (service: string) => {
  const [routeData, setRouteData] = useState([] as Data[]);

  useEffect(() => {
    getRouteData(service).then(setRouteData);
  }, []);

  return routeData;
};

export default useRouteData;
