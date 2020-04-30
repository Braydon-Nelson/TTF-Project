import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';
const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
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
            <form onSubmit={this.onSubmit}>
                <input
                    className="mt-3 ml-3"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit" className="mt-4 ml-4">
                    Reset My Password
        </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}
const PasswordForgetLink = () => (
    <p className="text-center mr-2 mt-4">
        <Link style={{ color: "black", fontSize: "21px" }} to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };