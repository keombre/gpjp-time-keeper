import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from '../Landing';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import SignUpPage from "../SignUp";

import * as ROUTES from '../../constants/routes';
import SignInPage from "../SignIn";

const App = () => (
  <Router>
    <Navigation />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
  </Router>
);

export default App;
