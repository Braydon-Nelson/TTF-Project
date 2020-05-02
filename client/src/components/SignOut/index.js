import React from 'react';
import { withFirebase } from '../Firebase';




const SignOutButton = ({ firebase }) => (

    <button type="button" className="ml-4" onClick={firebase.doSignOut}>
        Sign Out
    </button>

);
export default withFirebase(SignOutButton);