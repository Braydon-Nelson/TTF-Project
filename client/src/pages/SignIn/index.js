import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';
import Container from '../../components/Container'
import Col from '../../components/Col'
import Row from '../../components/Row'



const SignInPage = () => (

    <div className="background">
        <Container style={{ paddingBottom: "40px" }}>
            <Row >
                <Col size="md-4" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "56px", height: "430px" }} >
                    <h1 className="text-center" style={{ marginTop: "15px" }}>Sign In</h1>
                    <SignInForm />
                    <Row>
                        <Col size="md-2"></Col>
                        <Col size="md-8">
                            <PasswordForgetLink />
                        </Col>
                        <Col size="md-2"></Col>
                    </Row>
                    <Row>
                        <Col size="md-3"></Col>
                        <Col size="md-6">
                            <SignUpLink />
                        </Col>
                        <Col size="md-3"></Col>
                    </Row>
                </Col>
            </Row>
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




            <form onSubmit={this.onSubmit} className="justify-content-center" >
                <Row>
                    <Col size="xl-3"></Col>
                    <Col size="xl-6" className="ml-2 mt-4" >
                        <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"

                        />

                    </Col>
                    <Col size="xl-3"></Col>
                </Row>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6" className=" ml-2 mt-4">
                        <input
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Password"
                        />
                    </Col>
                    <Col size="md-3"></Col>
                </Row>
                <Row>
                    <Col size="md-4"></Col>
                    <Col size="md-6" className="ml-4 mt-4">
                        <button disabled={isInvalid} type="submit">
                            Sign In
        </button>
                    </Col>
                    <Col size="md-2"></Col>
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