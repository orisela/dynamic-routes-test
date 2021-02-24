import { apiUrl } from './utils';

const SERVICE_NAME = 'dynamic-routes';

const getDynamicRouteList = async () => {
  const url = apiUrl(SERVICE_NAME);

  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export { getDynamicRouteList };
