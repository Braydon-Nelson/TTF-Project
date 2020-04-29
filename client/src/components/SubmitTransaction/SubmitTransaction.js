import React from "react";
import { Button } from 'react-bootstrap/'
const axios = require('axios');

export default function SubmitTransaction() {



    return (
        <div>

            <Button variant="warning" size="lg" block className="SubmitTransactionButton">
                Submit Transaction
            </Button>

        </div>

        //need it to pop-up with the form input group upon clicking
    );

};







//axios call to get it to post

//multiply by 1 or -1 


// if statement, positive or negative


// if amount positive AND type is decrement, multiply value by negative 1


// if amount positive and type is increment, do nothing, multiply by one


// if amount negative and type is decrement, do nothing


// if amount negative and type is increment, multiply value by negative 1.

