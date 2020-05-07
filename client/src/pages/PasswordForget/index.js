import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';

import { Row, Col } from 'react-bootstrap'
import Container from "../../components/Container"

const PasswordForgetPage = () => (

    < Container style={{ paddingBottom: "60px" }}>


        
            <Col xs={12} style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "70px", height: "585px" }}>

                    <h1 className="text-center" style={{ marginTop: "18px", fontSize: "60px" }}>Forgot Password</h1>

                    <Row>
                        <PasswordForgetForm />
                    </Row>

                    <h2 style={{ marginTop: "20px", fontSize: "30px", paddingLeft: "30px", paddingRight: "30px" }} className="text-center ">Check your inbox for an email to reset your password</h2>

            </Col>
        


    </Container >
);





const INITIAL_STATE = {
    email: '',
    error: null,
};




class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <Col lg={12} xs={12}>

                <form onSubmit={this.onSubmit} style={{
                    textAlign: "center"
                }}>
                    <Row >

                        <Col xs={12}>
                            <input
                                className="mt-3 ml-3"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Email Address"
                            />
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12}>
                            <button disabled={isInvalid} type="submit" className="mt-4 ml-4">
                                Reset My Password</button>
                        </Col>
                    </Row>


                    {error && <p>{error.message}</p>}
                </form >
            </Col>

        );
    }
}
const PasswordForgetLink = () => (
    <p className="text-center mr-4 mt-4">
        <Link style={{ color: "black", fontSize: "21px" }} to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };