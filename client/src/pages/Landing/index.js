import React from 'react';
import Container from "../../components/Container"
import Col from "../../components/Col"
import Row from "../../components/Row"
import "./style.css"
import riley from "./images/riley.png"
import isaac from "./images/isaac.jpeg"
import q from "./images/q.jpeg"





function Landing() {

    return (

        <div className="background">
            <Container style={{ paddingBottom: "60px" }}>
                <Row>

                    <Col size="md-5" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "115px", height: "585px" }} >
                        <h2 className="text-center">Keep track of your spending with</h2>
                        <h1 className="text-center" style={{ fontSize: "80px" }}>TTF</h1>
                    </Col>
                    <Col size="md-1"></Col>
                    <Col size="md-6">
                        <Row>
                            <Row className="mb-4">
                                {/* <Col size="md-12" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "10px", height: "150px" }}>
                                    <h2 style={{ fontSize: "25px" }} className="text-center">“The TTF app allows me to hold myself accountable and helps me keep track of my financial priorities.”</h2>
                                </Col> */}
                                <Col size="xs-12" style={{ marginTop: "40px", paddingTop: "0px", height: "150px" }}>
                                    <Row>
                                        <Col size="md-4">
                                            <img className="img-thumbnail rounded-circle mt-4 profileimage" alt="profilepicture" src={q} />
                                        </Col>
                                        <Col size="md-8"  >
                                            <div className="speech-bubble pt-1 pb-4 pl-3 pr-3 mt-3" >
                                                <h2 style={{ fontSize: "25px" }} className="text-center ">“The TTF app allows me to hold myself accountable and helps me keep track of my financial priorities.”</h2>
                                            </div>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                {/* <Col size="md-12" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "13px", height: "150px" }}>
                                    <h2 style={{ fontSize: "25px" }} className="text-center">“This app is convenient, user-friendly, and visualizes my expenditures and balance history.”</h2>
                                </Col> */}
                                <Col size="xs-12" style={{ marginTop: "40px", paddingTop: "0px", height: "150px" }}>
                                    <Row>

                                        <Col size="md-8"  >
                                            <div className="speech-bubble2 pt-1 pb-4 pl-3 pr-3 " >
                                                <h2 style={{ fontSize: "25px" }} className="text-center ">“This app is convenient, user-friendly, and visualizes my expenditures and balance history.”</h2>
                                            </div>
                                        </Col>
                                        <Col size="md-4">
                                            <img className="img-thumbnail rounded-circle   profileimage" alt="profilepicture" src={isaac} />
                                        </Col>

                                    </Row>
                                </Col>

                            </Row>
                            <Row>

                                <Col size="xs-12" style={{ marginTop: "40px", paddingTop: "0px", height: "150px" }}>
                                    <Row>
                                        <Col size="md-4">
                                            <img className="img-thumbnail rounded-circle mt-1 profileimage" alt="profilepicture" src={riley} />
                                        </Col>
                                        <Col size="md-8"  >
                                            <div className="speech-bubble pt-1 pb-4 pl-3 pr-3 mt-3" >
                                                <h2 style={{ fontSize: "25px" }} className="text-center ">“Being able to track my transactions on-the-go is an asset to my busy lifestyle.”</h2>
                                            </div>
                                        </Col>

                                    </Row>
                                </Col>

                            </Row>

                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Landing;