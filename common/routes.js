import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainView from './views/main';
import MainHomeView from './views/main.home';

export default (
  <Route path="/" component={MainView}>
    <IndexRoute component={MainHomeView} />
  </Route>
);
