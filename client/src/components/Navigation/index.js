import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import { Navbar, Nav } from 'react-bootstrap'
import "./style.css"
import Col from '../Col';
import Row from '../Row';
import "./style.css"


const Navigation = () => (


    <Navbar className="navback d-flex justify-content-center " >

        <Nav>
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        </Nav>

    </Navbar>



);


const NavigationAuth = () => (
    <div >
        <Row>
            <Col size="md-4">



                <Link className="navbar-brand link text-center" to={ROUTES.HOME}>Home</Link>
            </Col>
            <Col size="md-4">
                <Link className="navbar-brand link text-center" to={ROUTES.ACCOUNT}>Account</Link>
            </Col>



            <Col size="md-4" className="ml-4 mt-4">
                <SignOutButton />
            </Col>
        </Row >

    </div >

);
const NavigationNonAuth = () => (

    <div>
        <Row>

            <Col size="md-6" >
                <Link className="navbar-brand link text-center " to={ROUTES.LANDING}>Home</Link>

            </Col>
            <Col size="md-6" >

                <Link className="navbar-brand link text-center" to={ROUTES.SIGN_IN}>Sign In</Link>
            </Col>

        </Row>
    </div>

);
export default Navigation;