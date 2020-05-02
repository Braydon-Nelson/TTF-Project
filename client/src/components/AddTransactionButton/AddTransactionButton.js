import React from 'react';
import { Button } from 'react-bootstrap/'
import "./AddTransactionButton.css"
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

export default function AddTransactionButton(props) {


    return (
        <div>
 <Link to={ROUTES.ADD_TRANSACTION} id="linkid">
            <Button variant="warning" size="lg" block className="AddTransactionButton" >
               
                    Add a Transaction
                
            </Button>
            </Link>
        </div>


    );

};

