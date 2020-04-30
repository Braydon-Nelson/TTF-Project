import React from 'react';
import { withFirebase } from '../Firebase';
import Col from '../Col';



const SignOutButton = ({ firebase }) => (

    <button type="button" className="ml-4" onClick={firebase.doSignOut}>
        Sign Out
    </button>

);
export default withFirebase(SignOutButton);