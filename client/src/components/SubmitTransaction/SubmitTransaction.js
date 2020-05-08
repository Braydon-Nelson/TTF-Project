import React from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap/'
import { AuthUserContext, withAuthorization } from '../Session';


const SubmitTransaction = () => (

    <AuthUserContext.Consumer>
        {submitForm => (

            <Button variant="warning" size="lg" block onClick={submitForm} className="SubmitTransactionButton">
                Submit Transaction
            </Button>

        )}
    </AuthUserContext.Consumer>

);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(SubmitTransaction);