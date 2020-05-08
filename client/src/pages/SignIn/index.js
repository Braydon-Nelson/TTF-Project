import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';
import Container from '../../components/Container'
import { Row, Col } from 'react-bootstrap'



const SignInPage = () => (

    <div className="background">
        <Container style={{ paddingBottom: "60px" }}>
           

                <Col xs={12} style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "70px", height: "585px" }} >
                    <Row >
                        <Col lg={12} xs={12}>
                            <h1 className="text-center" style={{ marginTop: "10px" }}>Sign In</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} xs={12}>
                            <SignInForm />
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={12} xs={12}>
                            <PasswordForgetLink />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} xs={12}>
                            <SignUpLink />
                        </Col>
                    </Row>

                </Col>

          
        </Container>
    </div>

);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};



class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (




            <form onSubmit={this.onSubmit} className="justify-content-center" style={{
                textAlign: "center"
            }}>
                <Row >

                    <Col xs={12}
                        className="ml-4  mt-4" >
                        <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                        />

                    </Col>

                </Row>
                <Row>

                    <Col xs={12} className=" ml-4 mt-4">
                        <input
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Password"
                        />
                    </Col>

                </Row>
                <Row>

                    <Col xs={12} className="ml-4  mt-4 justify-content-center">
                        <button disabled={isInvalid} type="submit" className="ml-2">
                            Sign In
        </button>
                    </Col>

                </Row>
                {error && <p>{error.message}</p>}

            </form >

        );
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };