import React from "react";
import "./UserDashboard.css";


import TransactionHist from "../../components/TransactionHist";
import LineGraph from "../../components/LineGraph";
import PieChart from "../../components/PieChart";
import AddTransactionButton from "../../components/AddTransactionButton";
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
