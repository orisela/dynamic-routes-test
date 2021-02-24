/* eslint-disable react/display-name */
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDynamicRoutes } from '../hooks/useDynamicRoutes';

import Home from './Home';
import Table from './Table';

const _dynamicRouteMap = {
  homeComponent: Home,
  tableComponent: Table,
};

const DynamicRoutes: FC = () => {
  const { routes } = useDynamicRoutes();

  return (
    <Switch>
      {routes.map(({ path, component }) => {
        const DynamicRoute = _dynamicRouteMap[component];
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
