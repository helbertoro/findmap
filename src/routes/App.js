import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../containers/Register';
import Login from '../containers/Login';
import RememberPassword from '../containers/RememberPassword';
import Home from '../containers/Home';
import Search from '../containers/Search';
import '../assets/styles/App.sass';
import Auth from '../containers/Auth';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/remember-password" component={RememberPassword} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/test" component={Auth} />
    </Switch>
  </BrowserRouter>
);

export default App;
