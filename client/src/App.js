import React from 'react';

//NOTICE Tyler temporarily commented this out to get it to compile
// import './App.css';
import AddTransaction from "./routes/AddTransaction";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import LandingPage from './pages/Landing';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import PasswordForgetPage from './pages/PasswordForget';
import HomePage from './pages/Home';
import AccountPage from './pages/Account';
import AdminPage from './pages/Admin';
import { withAuthentication } from './components/Session';

import * as ROUTES from "./constants/routes";
import Footer from './components/Footer';


const App = () => (
    <Router>



        <div>
            <Navigation />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />





            <Route path={ROUTES.ADD_TRANSACTION} component={AddTransaction} />

            <Footer />

        </div>
    </Router>
);

export default withAuthentication(App);