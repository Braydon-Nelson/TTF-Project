import React from "react";
import { AuthUserContext, withAuthorization } from '../../components/Session';
import Container from "../../components/Container"
import TransactionHist from "../../components/TransactionHist";
import LineGraph from "../../components/LineGraph";
import PieChart from "../../components/PieChart";
import AddTransactionButton from "../../components/AddTransactionButton";
import { Tabs, Tab, Row } from 'react-bootstrap/'
import Col from "../../components/Col"
import "./Home.css"

const HomePage = () => {



    return <AuthUserContext.Consumer>
        {authUser => (
            <Row style={{ width: "100vw", margin: "auto" }}>

                <Col size="md-12" >
                    <Container className="dashboardBackground">

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

                        <AddTransactionButton >
                        </AddTransactionButton>

                    </Container >
                </Col>

            </Row>
        )}
    </AuthUserContext.Consumer>

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);





