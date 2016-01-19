import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainView from './views/main';
import MainHomeView from './views/main.home';
import MainSearchView from './views/main.search';
import MainProfessorView from './views/main.professors';
import MainRateView from './views/main.rate';

export default (
  <Route path="/" component={MainView}>
    <IndexRoute component={MainHomeView} />
    <Route path="search" component={MainSearchView} />
    <Route path="professors/:id" component={MainProfessorView} />
    <Route path="rate" component={MainRateView} />
  </Route>
);
