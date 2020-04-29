import React from 'react';
import Container from "../../components/Container"
import Col from "../../components/Col"
import Row from "../../components/Row"
import "./style.css"





function Landing() {

    return (

        <div className="background">
            <Container>
                <Row>
                    <Col size="md-4" style={{ backgroundColor: "rgba(127, 223, 255,0.6)", marginTop: "56px", height: "430px" }} >
                        <h2 className="text-center">Keep track of your spending with</h2>
                        <h1 className="text-center">TTF</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Landing;