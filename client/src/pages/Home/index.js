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
        // API.saveBook({
        //     title: formObject.title,
        //     author: formObject.author,
        //     synopsis: formObject.synopsis
        //   })
    };


    const [transactions, setTransactions] = useState([])


    const { userid } = 1;

    useEffect(() => {
        const transactiondata = API.getTransactions(userid);

        setTransactions(transactiondata);
    }, [])



    // function loadBooks() {
    //     API.getBooks()
    //       .then(res => 
    //         setBooks(res.data)
    //       )
    //       .catch(err => console.log(err));
    //   };



    return (
        <div className="dashboardBackground">

            <Container>

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

            </Container >

            <AddTransactionButton onClick={addTransactionHandler}>
            </AddTransactionButton>

        </div >
    );
}

const condition = authUser => !!authUser;



export default withAuthorization(condition)(HomePage);








