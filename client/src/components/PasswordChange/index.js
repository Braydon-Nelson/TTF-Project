import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Row from '../Row';
const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
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
        const { passwordOne, passwordTwo, error } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';
        return (
            <form onSubmit={this.onSubmit}>


                <input className="mt-4 ml-3"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    className="mt-4 ml-3"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />

                <button disabled={isInvalid} type="submit" className="mt-4 ml-4">
                    Reset My Password
        </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}
export default withFirebase(PasswordChangeForm);