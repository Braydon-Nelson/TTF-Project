import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import { Navbar, Nav } from 'react-bootstrap'


const Navigation = () => (


    <Navbar bg="dark" variant="light">

        <Nav className="mr-auto ">
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </Nav>

    </Navbar>



);


const NavigationAuth = () => (
    <div>

        <Link className="navbar-brand" to={ROUTES.LANDING}>Landing</Link>


        <Link className="navbar-brand" to={ROUTES.HOME}>Home</Link>

        <Link className="navbar-brand" to={ROUTES.ACCOUNT}>Account</Link>

        <Link className="navbar-brand" to={ROUTES.ADMIN}>Admin</Link>



        <SignOutButton />


    </div>

);
const NavigationNonAuth = () => (

    <div>
        <Link className="navbar-brand" to={ROUTES.LANDING}>Landing</Link>


        <Link className="navbar-brand" to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>

);
export default Navigation;