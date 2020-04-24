import React from 'react';
import { withAuthorization } from '../../components/Session';
import Container from "../../components/Container"


const HomePage = () => (
    <div>
        <Container>
            <h1>Home Page</h1>
            <p>The Home Page is accessible by every signed in user.</p>
        </Container>
    </div>
);
const condition = authUser => !!authUser;



export default withAuthorization(condition)(HomePage);