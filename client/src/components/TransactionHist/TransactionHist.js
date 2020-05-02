import React, { useState } from "react";
import { Container, Table } from 'react-bootstrap/'
import axios from 'axios'
import { AuthUserContext, withAuthorization } from '../../components/Session';

import { transactions } from "../../util/API";


const TransactionHist = () => {

    const [data, setData] = useState({
        data: []
    })

    function getData(authUser) {
        console.log("qwerqwerqwer");

        axios.get('/api/transactions/' + authUser.uid)
            .then((response) => {
                console.log(response.data);

                setData({ data: response.data })
            })
    };

    //figure out how to add a date sort function!
    return (
        <AuthUserContext.Consumer>
            {authUser => (

                <div id="transid">
                    <Container>
                        <div >
                            <h2 className="text-center mb-4  ">Activity Details</h2>

                        </div>
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Category</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>

                                {console.log(data.data)}
                                {
                                    data.data.map(data => (
                                        <tr key={data.name}>
                                            <td>{data.name}</td>
                                            <td>{data.date}</td>
                                            <td>{data.amount}</td>
                                            <td>{data.type}</td>
                                            <td>{data.category}</td>
                                            <td>{data.comments}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>

                    </Container>
                </div>
            )}
        </AuthUserContext.Consumer >
    );

};
const condition = authUser => !!authUser;


export default withAuthorization(condition)(TransactionHist);