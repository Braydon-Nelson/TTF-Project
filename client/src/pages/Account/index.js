import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../../components/PasswordChange';
import { AuthUserContext, withAuthorization } from '../../components/Session';
import Container from "../../components/Container"
import Col from '../../components/Col'
import Row from '../../components/Row'
import "./style.css"



function usernamefun(authUser) {
    var str = authUser.email
    var arr = str.split("")

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === "@") { var limit = i }

    }

    var authUser = str.slice(0, limit)

    return authUser;
}

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (




            < Container style={{ paddingBottom: "60px" }}>

                <Row >
                    <Col size="md"></Col>
                    <Col size="md-5" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "70px", height: "585px" }}  >
                        <h1 className="text-center" style={{ marginTop: "13px", fontSize: "55px" }}>Account: {usernamefun(authUser)}</h1>

                        <Row>
                            <Col size="md-3"></Col>
                            <Col size="md-8" >
                                <div className="mr-4">
                                    <PasswordForgetForm />
                                </div>

                            </Col>
                            <Col size="md-1"></Col>

                        </Row>
                        <Row>
                            <Col size="md-3"></Col>
                            <Col size="md-8">
                                <PasswordChangeForm />
                            </Col>
                            <Col size="md-1"></Col>
                        </Row>
                    </Col>
                    <Col size="md"></Col>
                </Row>
            </Container >

            // <Container>
            //     <h1>Account: {authUser.email}</h1>
            //     <PasswordForgetForm />
            //     <PasswordChangeForm />
            // </Container>

        )}
    </AuthUserContext.Consumer >
);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(AccountPage);