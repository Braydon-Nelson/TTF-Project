import React, { useState, useEffect } from "react";
import { Container, Table } from 'react-bootstrap/'
import axios from 'axios'
import { AuthUserContext, withAuthorization } from '../../components/Session';


import { transactions } from "../../util/API";


const TransactionHist = () => {

    const [data, setData] = useState({
        data: [],
        run: true
    });

    function getData(authUser) {
        console.log("qwerqwerqwer");

        axios.get('/api/transactions/' + authUser.uid)
            .then((response) => {
                setData({
                    data: response.data,
                    run: false
                })
            })
    };

    //figure out how to add a date sort function!
    return (
        <AuthUserContext.Consumer>
            {authUser => (

                < div id="transid">

                    <Container>
                        <div >
                            <h2 className="text-center mb-4  ">Activity Details</h2>
                        </div>
                        <div>{(data.run) ? getData(authUser) : console.log("")}</div>
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
            )
            }

        </AuthUserContext.Consumer >
    );

};
const condition = authUser => !!authUser;


export default withAuthorization(condition)(TransactionHist);