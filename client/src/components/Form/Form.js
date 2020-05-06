import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'
import axios from 'axios'
import { Form, Button, InputGroup, Row, FormControl } from 'react-bootstrap/'
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"
import { AuthUserContext, withAuthorization } from '../Session';
import Container from "../../components/Container"
import Col from "../../components/Col"


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const NewForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [formData, setFormData] = useState({
        name: '',
        date: moment(startDate).format("YYYY/MM/DD"),
        amount: '',
        type: '',
        category: '',
        comments: ''
    });

    function handleDateChange(date) {
        setStartDate(date);
        setFormData({
            ...formData,
            date: moment(date).format("YYYY/MM/DD")
        })
    };

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function submitForm(authUser) {
        console.log(formData, authUser.uid);

        axios.post("/api/transactions", {
            name: formData.name,
            date: formData.date,
            amount: formData.amount,
            type: formData.type,
            category: formData.category,
            comment: formData.comments,
            uid: authUser.uid
        })
      
    }

    return <AuthUserContext.Consumer>
        {authUser => (
            <Row>


                <Col size="md-12">
                    <Container className="formContainer">

                        <Col size="md-7" style={{ margin: "auto" }}  >
                            <h2 style={{ margin: "auto" }} className="text-center" >Add a Transaction</h2>
                        </Col>
                        <Form>

                            <Col size="md-7" style={{ margin: "auto" }} >
                                <InputGroup className="mb-3 mt-4">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Transaction Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="TransactionName" name="name" onChange={handleFormChange} aria-describedby="inputGroup-sizing-default" />
                                </InputGroup>

                                <DatePicker className="mb-3 mt-1"
                                    selected={startDate}

                                    id="TransactionDate" onChange={handleDateChange}
                                />

                                <InputGroup className="mb-3 mt-1">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <InputGroup.Text>0.00</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="TransactionAmount" name="amount" onChange={handleFormChange}
                                        placeholder="Transaction Amount" aria-label="Amount (to the nearest dollar)"
                                        type="number" min="0" />
                                </InputGroup>

                                <Form.Group>
                                    <Form.Label className=" mt-1">
                                        Transaction Type
                        </Form.Label>
                                    <Form.Control as="select" size="sm" id="TransactionType" name="type" onChange={handleFormChange}>
                                        <option>

                                        </option>
                                        <option>
                                            Income
                            </option>
                                        <option>
                                            Expense
                            </option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className=" mt-1">
                                        Transaction Category
                        </Form.Label >
                                    <Form.Control as="select" size="sm" id="TransactionCategory" name="category" onChange={handleFormChange} >
                                        <option>

                                        </option>
                                        <option>
                                            Rent/Mortgage
                            </option>
                                        <option>
                                            Utilities
                            </option>
                                        <option>
                                            Groceries or Dining
                            </option>
                                        <option>
                                            Education
                            </option>
                                        <option>
                                            Retail/Shopping
                            </option>
                                        <option>
                                            Other
                            </option>
                                    </Form.Control>
                                </Form.Group>


                                <InputGroup className="mb-2 mt-4">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Comments</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl name="comments" onChange={handleFormChange} as="textarea" aria-label="With textarea" id="TransactionComments" />
                                </InputGroup>

                                <br></br>
                            </Col>

                            <Button variant="warning" size="lg" block onClick={() => submitForm(authUser)} className="SubmitTransactionButton mt-4"
                                style={{ width: "100%" }}>
                                Submit Transaction
                     </Button>
                        </Form>


                    </Container >
                </Col>

            </Row>
        )}

    </AuthUserContext.Consumer>

};


const condition = authUser => !!authUser;
export default withAuthorization(condition)(NewForm);