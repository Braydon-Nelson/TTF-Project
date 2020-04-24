import React from "react";
import "./UserDashboard.css";

import TransactionHist from "../../dashboard_components/TransactionHist";
import LineGraph from "../../dashboard_components/LineGraph";
import PieChart from "../../dashboard_components/PieChart";
import AddTransactionButton from "../../dashboard_components/AddTransactionButton";
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap/'




export default function UserDashboard() {
    function addTransactionHandler(e) {
        alert("button pressed");
    };



    return (
        <div>

            <Container className="dashboardContainer">

                <Tabs defaultActiveKey="table" id="uncontrolled-tab-example">
                    <Tab eventKey="table" title="Transaction Details">
                        <TransactionHist />
                    </Tab>
                    <Tab eventKey="piechart" title="Spending Categories">
                        <PieChart />
                    </Tab>
                    <Tab eventKey="barchart" title="Balance History">
                        <LineGraph />
                    </Tab>
                </Tabs>

            </Container >

            <AddTransactionButton onClick={addTransactionHandler}>
            </AddTransactionButton>

        </div >
    );
}
