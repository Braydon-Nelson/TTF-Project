import React from 'react';
import { Table } from 'react-bootstrap/'
import { transactions } from "../../data/transactions";


export default function TransactionHist(props) {

    const {
        name,
        date,
        amount,
        type,
        category,
        comments
    } = props;



    // {
    //     transactions.map(transaction => (
    //         <Col lg={6} xs={12}>
    //             <ProjectCard
    //                 key={project.key}
    //                 name={project.name}
    //                 image={project.image}
    //                 repositoryLink={project.repositoryLink}
    //                 deployedLink={project.deployedLink}
    //             />
    //         </Col>
    //     ))
    // }


    return (
        <div>
            <Table striped bordered hover>
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
                        <tr>
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
        </div>
    );

};