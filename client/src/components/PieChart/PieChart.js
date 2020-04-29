import React, { Component } from 'react';
import { transactions } from "../../util/API";

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

        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
        ],
        label: 'Monthly Spending Summary' // for legend
    }],

    labels: labelData
};

export default class PolarDemo extends Component {
    render() {
        return (
            <div>
                <h2>Monthly Spending Summary</h2>
                <Polar data={data} />
            </div>
        );
    }

}



