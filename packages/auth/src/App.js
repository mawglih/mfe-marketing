import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import SignUp from './components/Signup';
import SignIn from './components/Signin';

export default ({ history }) => {
    return (
        <div>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                       <Route path="/auth/signin" component={SignIn} />
                       <Route path="/auth/signup" component={SignUp} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
};