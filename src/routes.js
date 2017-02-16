import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import HomePage from './HomePage'
import SignUpPage from './SignUpPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="signup" component={SignUpPage} />
    </Route>
);