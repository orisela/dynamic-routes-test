import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDynamicRoutes } from '../hooks/useDynamicRoutes';

const Nav: FC = () => {
  const dynamicRoutes = useDynamicRoutes();

  return (
    <nav>
      <ul>
        {dynamicRoutes.map((route: any) => (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
