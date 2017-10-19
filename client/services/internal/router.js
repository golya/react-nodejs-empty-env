import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route } from 'react-router';

function RouterComponent(container) {
  const History = container.get('History');
  const Store = container.get('Store');
  const Root = container.get('Root');
  const Main = container.get('Main');

  return (
    <Router history={syncHistoryWithStore(History.getHistory(), Store)}>
      <Route component={Main}>
        <Route path="/" component={Root} />
      </Route>
    </Router>
  )
}

RouterComponent.type = 'factory';
module.exports = RouterComponent;
