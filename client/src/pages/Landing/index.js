import React from 'react';
import Container from "../../components/Container"
import Col from "../../components/Col"
import Row from "../../components/Row"
import "./style.css"





function Landing() {

    return (

        <div className="background">
            <Container style={{ paddingBottom: "60px" }}>
                <Row>
                    <Col size="md-5" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "60px", paddingTop: "115px", height: "585px" }} >
                        <h2 className="text-center">Keep track of your spending with</h2>
                        <h1 className="text-center" style={{ fontSize: "80px" }}>TTF</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Landing;