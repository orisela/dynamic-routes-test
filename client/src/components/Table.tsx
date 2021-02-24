import React, { FC } from 'react';
import { useTableConfigs } from '../hooks/useTableConfigs';
import useRouteData from '../hooks/useRouteData';

type TableProps = {
  path: string;
};

const Table: FC<TableProps> = ({ path }) => {
  const tableConfig = useTableConfigs(path);
  const routeData = useRouteData(path);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableConfig.columns?.map((col) => (
              <th key={col.field}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {routeData.map((row, index) => (
            <tr key={index}>
              {tableConfig.columns?.map(({ field }) => (
                <td key={field}>{row[field] === true ? 'V' : row[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
