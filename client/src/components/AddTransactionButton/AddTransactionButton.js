import React from 'react';
import { Button } from 'react-bootstrap/'
import "./AddTransactionButton.css"
import { Link } from "react-router-dom";

export default function AddTransactionButton(props) {


    return (
        <div>

            <Button variant="warning" size="lg" block className="AddTransactionButton" >
                <Link to={`/addTransaction`}>
                    Add a Transaction
                </Link>
            </Button>

        </div>


    );

};

