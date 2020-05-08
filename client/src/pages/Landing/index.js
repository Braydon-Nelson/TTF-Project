import React from 'react';
import Container from "../../components/Container"
import { Row, Col } from 'react-bootstrap'
import "./style.css"
import riley from "./images/riley.png"
import isaac from "./images/isaac.jpeg"
import q from "./images/q.jpeg"

function Landing() {

    return (

        <div className="background" lg={12} >
            <Container style={{ paddingBottom: "60px" }}>
                <Row>

                    <Col lg={4} xs={12} style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "60px", height: "585px" }} >
                        <h2 className="text-center">Keep track of your spending with</h2>
                        <h1 className="text-center" style={{ fontSize: "72px" }}>TTF</h1>
                    </Col>

                    <Col lg={2} xs={12}></Col>


                    <Col lg={6} xs={12}>

                        <Row>

                            <Col xs={12} style={{ paddingTop: "0px" }}>
                                <Row>
                                    <Col lg={5} xs={5} >
                                        <img className="img-thumbnail rounded-circle mt-4 profileimage" alt="profilepicture" src={q} />
                                    </Col>
                                    <Col xs={7}>
                                        <div className="speech-bubble pt-1 pb-4 pl-3 pr-3 mt-3" >
                                            <h2 style={{ fontSize: "21px" }} className="text-center ">“The TTF app allows me to hold myself accountable and helps me keep track of my financial priorities.”</h2>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>


                            <Col xs={12} style={{ marginTop: "40px", paddingTop: "0px" }}>
                                <Row>
                                    <Col xs={7}>
                                        <div className="speech-bubble2 pt-1 pb-4 pl-3 pr-3 " >
                                            <h2 style={{ fontSize: "21px" }} className="text-center ">“This app is convenient, user-friendly, and visualizes my expenditures and balance history.”</h2>
                                        </div>
                                    </Col>
                                    <Col lg={5} xs={5} >
                                        <img className="img-thumbnail rounded-circle   profileimage" alt="profilepicture" src={isaac} />
                                    </Col>

                                </Row>
                            </Col>


                            <Col xs={12} style={{ marginTop: "40px", paddingTop: "0px" }}>
                                <Row>
                                    <Col lg={5} xs={5} >
                                        <img className="img-thumbnail rounded-circle mt-1 profileimage" alt="profilepicture" src={riley} />
                                    </Col>
                                    <Col xs={7}>
                                        <div className="speech-bubble pt-1 pb-4 pl-3 pr-3 mt-3" >
                                            <h2 style={{ fontSize: "21px" }} className="text-center ">“Being able to track my transactions on-the-go is an asset to my busy lifestyle.”</h2>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>


                        </Row>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Landing;