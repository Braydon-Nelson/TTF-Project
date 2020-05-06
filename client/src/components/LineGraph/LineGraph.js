import React, { Component, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { AuthUserContext } from '../Session';
import axios from 'axios'

import { transactions } from "../../util/API";


function getData(authUser) {
  let chartData = [];
  let labelData = [];
  let runningTotal = 0;

  axios.get('/api/transactions/' + authUser.uid)
    .then((response) => {
      response.data.forEach(transaction => {
        runningTotal += parseFloat(transaction.amount)
        chartData.push(runningTotal);
        labelData.push(transaction.date)
      });

    })
  return {
    labels: labelData,

    datasets: [
      {
        label: 'Balance Total',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData
      }
    ]

  };
}
export default class LineDemo extends Component {

  render() {

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <h2>Your Balance in the Last 30 Days</h2>
            {console.log("authUser - " + authUser)}
            <Line data={() => getData(authUser)} />
          </div>

        )}
      </AuthUserContext.Consumer >
    );
  }
}