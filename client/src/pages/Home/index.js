import React, { useState, useEffect } from "react";
import { withAuthorization } from '../../components/Session';
import Container from "../../components/Container"
import API from "../../util/API"
import TransactionHist from "../../components/TransactionHist";
import LineGraph from "../../components/LineGraph";
import PieChart from "../../components/PieChart";
import AddTransactionButton from "../../components/AddTransactionButton";
import { Tabs, Tab, Row, Col } from 'react-bootstrap/'
import "./Home.css"



function HomePage() {

    function addTransactionHandler(e) {
        console.log(e);
    };


    const [transactions, setTransactions] = useState([])


    const { userid } = 1;

    useEffect(() => {
        const transactiondata = API.getTransactions(userid);

        setTransactions(transactiondata);
    }, [])




    return (



        <Container fluid className="dashboardBackground">

            <Tabs defaultActiveKey="table" id="uncontrolled-tab-example">
                <Tab eventKey="table" title="Transaction Details">
                    <TransactionHist transactions={transactions} />
                </Tab>
                <Tab eventKey="piechart" title="Spending Categories">
                    <PieChart />
                </Tab>
                <Tab eventKey="barchart" title="Balance History">
                    <LineGraph />
                </Tab>
            </Tabs>

            <AddTransactionButton onClick={addTransactionHandler}>
            </AddTransactionButton>

        </Container >


    );
}

const condition = authUser => !!authUser;



export default withAuthorization(condition)(HomePage);








