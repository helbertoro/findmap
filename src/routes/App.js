import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from '../containers/Search';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
