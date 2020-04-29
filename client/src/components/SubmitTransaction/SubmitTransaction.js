import React from "react";
import { Button } from 'react-bootstrap/'
import { AuthUserContext, withAuthorization } from '../Session';


const SubmitTransaction = () => (

    <AuthUserContext.Consumer>
        {authUser => (

            <Button variant="warning" size="lg" block onClick={submitForm} className="SubmitTransactionButton">
                Submit Transaction
            </Button>

        )}
    </AuthUserContext.Consumer>

);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(SubmitTransaction);

function submitForm(authUser) {
    console.log("Form not sent yet");
}





//axios call to get it to post

//multiply by 1 or -1 


// if statement, positive or negative


// if amount positive AND type is decrement, multiply value by negative 1


// if amount positive and type is increment, do nothing, multiply by one


// if amount negative and type is decrement, do nothing


// if amount negative and type is increment, multiply value by negative 1.

