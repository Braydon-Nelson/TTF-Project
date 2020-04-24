import React, { Component } from 'react';

import { Polar } from 'react-chartjs-2';

const data = {
    datasets: [{
        data: [
            70,
            150,
            35,
            68,
            75
        ],
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
        ],
        label: 'Monthly Spending Summary' // for legend
    }],

    labels: [
        'Utilities',
        'Rent/Mortgage',
        'Food/Groceries',
        'Shopping/Retail',
        'Education'
    ]
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