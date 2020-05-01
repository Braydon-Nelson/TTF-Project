import React from 'react';
import { Container, Table } from 'react-bootstrap/'
import { transactions } from "../../util/API";


export default function TransactionHist(props) {

    const {
        // name,
        // date,
        // amount,
        // type,
        // category,
        // comments


        transactions
    } = props;

    //figure out how to add a date sort function!

    return (
        <Container fluid>

                <h2>Activity Details</h2>

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
                    {transactions.map(Row => (
                        <tr key={Row.name}>
                            <td>{Row.name}</td>
                            <td>{Row.date}</td>
                            <td>{Row.amount}</td>
                            <td>{Row.type}</td>
                            <td>{Row.category}</td>
                            <td>{Row.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    );

};