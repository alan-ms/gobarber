import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashBoard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/dashboard" component={DashBoard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
