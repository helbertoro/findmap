import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from '../containers/Auth';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth} />
        </Switch>
    </BrowserRouter>
);

export default App;