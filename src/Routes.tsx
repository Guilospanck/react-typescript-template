import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './screens/SignIn';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoute;
