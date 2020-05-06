import React, { Component } from 'react';
import { AuthUserContext } from '../../components/Session';
import axios from 'axios'
import { Polar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';


function getData(authUser) {
    let pieData = [];
    let labelData = [];

    axios.get('/api/transactions/' + authUser.uid)
        .then((response) => {
            response.data.forEach(transaction => {
                if (transaction.type === "Expense") {
                    pieData.push(parseFloat(transaction.amount));
                    labelData.push(transaction.category)
                }
            });

        })
    return {
        datasets: [{
            data: pieData,
            responsive: true,
            maintainAspectRatio: false,
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
        }],

        labels: labelData,
    };
}

export default class PolarDemo extends Component {
    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <Container>
                        <div>
                            <h2 className="text-center mb-4  ">Monthly Spending Summary</h2>
                            <div className="chart-container col-md-12" style={{ position: "relative", height: "40vh", width: "80vw" }}>
                                <Polar
                                    data={() => getData(authUser)}
                                    width={100}
                                    height={50}
                                    options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </Container>
                )}
            </AuthUserContext.Consumer >
        );

    }

}





