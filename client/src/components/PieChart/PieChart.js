import React, { Component } from 'react';
import { transactions } from "../../util/API";
import { Row, Col } from 'react-bootstrap/'
import { Polar } from 'react-chartjs-2';



let pieData = [];
let labelData = [];
transactions.forEach(transaction => {
    if (transaction.type === "Expense") {
        pieData.push(parseFloat(transaction.amount));
        labelData.push(transaction.category)
    }


});

const data = {
    datasets: [{
        data: pieData,
        responsive: true,
        maintainAspectRatio : false,
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
            '#c8a2c8',
            '#e56e27'
        ],
        label: 'Monthly Spending Summary',
        maintainAspectRatio: false

        // for legend
    }],

    labels: labelData,
};

// const options = {
//     maintainAspectRatio : false
//   }



export default class PolarDemo extends Component {
    render() {
        return (
            <div>
                <h2>Monthly Spending Summary</h2>
                <Row>
                    <Col xs={12}>
                        <Polar data={data} />
                    </Col>
                </Row>


            </div>
        );

    }

}





