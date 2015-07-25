import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';

import Application from './application.jsx';

import States from './states.js';



const routes = (
  <Route handler={Application}>
    <Route handler={States.session.container}>
      <DefaultRoute name='login' handler={States.session.login} />
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('application'));
});
