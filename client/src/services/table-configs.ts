import { apiUrl } from './utils';

const SERVICE_NAME = 'table-configs';

const getTableConfigs = async (serviceName: string) => {
  const url = apiUrl(SERVICE_NAME);

  try {
    const result = await fetch(`${url}/${serviceName}`);
    const data = await result.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export { getTableConfigs };
