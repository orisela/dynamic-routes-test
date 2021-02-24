import { useState, useEffect } from 'react';
import { getTableConfigs } from '../services/table-configs';

type Column = {
  field: string;
  title: string;
};

type TableConfig = {
  service: string;
  columns: Column[];
};

const useTableConfigs = (serviceName: string) => {
  const [tableConfig, setTableConfig] = useState({} as TableConfig);

  useEffect(() => {
    getTableConfigs(serviceName).then(setTableConfig);
  }, [serviceName]);

  return tableConfig;
};

export { useTableConfigs };
