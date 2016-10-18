import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
// import FavoritesPage from './components/FavoritesPage';
// import WatchList from './components/WatchList';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='search' component={SearchPage} />
      {/* <Route path='favorites' component={FavoritesPage} />
      <Route path='watchList' component={WatchList} /> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
