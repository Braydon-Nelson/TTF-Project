import React, { useState } from "react";
// import SubmitTransaction from "../SubmitTransaction";
import DatePicker from "react-datepicker";
import { Form, Button, Row, Col, Input, InputGroup, Container, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"
import { AuthUserContext, withAuthorization } from '../Session';


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



export default function NewForm() {

    const condition = authUser => !!authUser;

    const [startDate, setStartDate] = useState(new Date())

    function handleChange(date) {
        setStartDate(date);

    };


    function submitForm(authUser) {
        console.log("Form not sent yet");
    }

    return (
        <AuthUserContext.Consumer>
            {authUser => (

                <Container className="formContainer">
                    <Form>
                        <br></br>
                        <InputGroup className="mb-3" id="TransactionName">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Transaction Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="TransactionName" aria-describedby="inputGroup-sizing-default" />
                        </InputGroup>


                        <DatePicker className="mb-3"
                            selected={startDate}
                            id="TransactionDate" onChange={handleChange}
                        />


                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                                <InputGroup.Text>0.00</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="TransactionAmount"
                                placeholder="Transaction Amount" aria-label="Amount (to the nearest dollar)"
                                type="number"
                                min="0" />
                        </InputGroup>


                        <Form.Group id="TransactionType">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Control as="select" size="sm" custom>
                                <option>Income</option>
                                <option>Expense</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group id="TransactionCategory">
                            <Form.Label>Transaction Category</Form.Label>
                            <Form.Control as="select" size="sm" custom>
                                <option>Utilities</option>
                                <option>Rent/Mortgage</option>
                                <option>Education</option>
                                <option>Groceries or Dining</option>
                                <option>Shopping or Retail</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>

                        <br></br>

                        <InputGroup id="TransactionComments">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Comments</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" id="TransactionComments" />
                        </InputGroup>

                        <br></br>

                        <Button variant="warning" size="lg" block onClick={submitForm} type="submit" className="SubmitTransactionButton">
                            Submit Transaction
                     </Button>

                        <br></br>
                    </Form>


                </Container >
            )}

        </AuthUserContext.Consumer>

    );
}


