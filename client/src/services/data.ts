import { apiUrl } from './utils';

const getData = async (serviceName: string) => {
  const url = apiUrl(serviceName);

  try {
    const result = await fetch(`${url}`);
    const data = await result.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export { getData };
