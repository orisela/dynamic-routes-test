import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import DynamicRoutes from './components/DynamicRoutes';

const App: FC = () => {
  return (
    <Router>
      <Nav />
      <DynamicRoutes />
    </Router>
  );
};

export default App;
