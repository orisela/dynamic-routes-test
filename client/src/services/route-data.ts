import { apiUrl } from './utils';

const getRouteData = async (serviceName: string) => {
  const url = apiUrl(serviceName);

  try {
    const result = await fetch(`${url}`);
    const data = await result.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export { getRouteData };
