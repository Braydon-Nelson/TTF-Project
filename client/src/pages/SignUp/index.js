import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Container from "../../components/Container"
import { Row, Col } from 'react-bootstrap'

import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (


< Container style={{ paddingBottom: "60px" }}>

<Row >
    <Col xs={12}  style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "85px", height: "585px" }}  >
        <h1 className="text-center" style={{ marginTop: "10px"}}>Sign Up!</h1>

        <Row>
            <Col size="md-3"></Col>
            <Col size="md-8">
                <div>
                <SignUpForm />
                </div>

            </Col>
            <Col size="md-1"></Col>

        </Row>
       
    </Col>
</Row>
</Container >
);



const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    uid: '',
    error: null,
  };


  class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    
  }


  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.setState({
          ...this.state, 
          uid: authUser.user.uid
        });
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

      
    event.preventDefault();
  }


  
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';


    return (
      <form onSubmit={this.onSubmit} style={{
        textAlign: "center"
    }}>

        <input
        className="mt-4 ml-3"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
        className="mt-4 ml-3"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
        className="mt-4 ml-3"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
        className="mt-4 ml-3"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit" className="mt-4  mr-4" style={{  marginLeft: "62px"}} >
            Sign Up
            </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


const SignUpLink = () => (
  <p  style={{ color: "black", fontSize: "18px" }} className="text-center mr-3">
    Don't have an account? <Link style={{ color: "black", fontSize: "21px" }} to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);


export default SignUpPage;
export { SignUpForm, SignUpLink };