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

        <Row >
            <Col size="xs"></Col>
            <Col size="xs">



                <Link className="navbar-brand  inline-block link text-center ml-4" to={ROUTES.HOME}>Home</Link>
            </Col>
            <Col size="xs">
                <Link className="navbar-brand inline-block link text-center ml-4" to={ROUTES.ACCOUNT}>Account</Link>
            </Col>



            <Col size="xs" className="ml-4 inline-block mt-4">
                <SignOutButton />

            </Col>
        </Row >


    </div >

);
const NavigationNonAuth = () => (

    <div>
        <Row>

            <Col size="xs" >
                <Link className="navbar-brand link text-center mr-4" to={ROUTES.LANDING}>Home</Link>

            </Col>
            <Col size="xs" >

                <Link className="navbar-brand link text-center ml-4" to={ROUTES.SIGN_IN}>Sign In</Link>
            </Col>

        </Row>
    </div>

);
export default Navigation;