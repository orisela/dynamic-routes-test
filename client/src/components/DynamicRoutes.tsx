import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDynamicRoutes } from '../hooks/useDynamicRoutes';

import Home from './Home';
import Table from './Table';

const dynamicRouteMap = {
  homeComponent: Home,
  tableComponent: Table,
};

const DynamicRoutes: FC = () => {
  const dynamicRoutes = useDynamicRoutes();

  return (
    <Switch>
      {dynamicRoutes.map(({ path, component }) => {
        const DynamicRoute = dynamicRouteMap[component];
        return (
          <Route key={path} path={'/' + path} exact={true}>
            <DynamicRoute path={path} />
          </Route>
        );
      })}
    </Switch>
  );
};

export default DynamicRoutes;
