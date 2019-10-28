import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../containers/Register';
import Login from '../containers/Login';
import RememberPassword from '../containers/RememberPassword';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/remember-password" component={RememberPassword} />
        </Switch>
    </BrowserRouter>
);

export default App;