import { useState, useEffect } from 'react';
import { getDynamicRouteList } from '../services/dynamic-routes';

type Path = '/' | '/users' | '/campaign';

type Component = 'homeComponent' | 'tableComponent';

type Route = {
  path: Path;
  component: Component;
};

const useDynamicRoutes = () => {
  const [routes, setRoutes] = useState([] as Route[]);

  useEffect(() => {
    getDynamicRouteList().then((data) => setRoutes(data));
  }, []);

  return { routes };
};

export { useDynamicRoutes };
