import React from "react";
import "./UserDashboard.css";

import TransactionHist from "../../dashboard_components/TransactionHist";
import LineGraph from "../../dashboard_components/LineGraph";
import PieChart from "../../dashboard_components/PieChart";

import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap/'




export default function UserDashboard() {
    return (
        <div>

            <Container>

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


        </div >
    );
}
