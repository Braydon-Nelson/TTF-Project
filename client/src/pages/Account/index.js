import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../../components/PasswordChange';
import { AuthUserContext, withAuthorization } from '../../components/Session';
import Container from "../../components/Container"


const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (

            <Container>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </Container>

        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(AccountPage);