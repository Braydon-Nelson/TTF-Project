import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'
import axios from 'axios'
import { Form, Button, Row, Col, Input, InputGroup, Container, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"
import { AuthUserContext, withAuthorization } from '../Session';


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

            <Container className="formContainer">
                <h2>Add a Transaction</h2>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Transaction Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="TransactionName" name="name" onChange={handleFormChange} aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>

                    <DatePicker className="mb-3"
                        selected={startDate}

                        id="TransactionDate" onChange={handleDateChange}
                    />

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                            <InputGroup.Text>0.00</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="TransactionAmount" name="amount" onChange={handleFormChange}
                            placeholder="Transaction Amount" aria-label="Amount (to the nearest dollar)"
                            type="number" min="0" />
                    </InputGroup>

                    <Form.Group>
                        <Form.Label>
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
                        <Form.Label>
                            Transaction Category
                        </Form.Label>
                        <Form.Control as="select" size="sm" id="TransactionCategory" name="category" onChange={handleFormChange}>
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


                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Comments</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="comments" onChange={handleFormChange} as="textarea" aria-label="With textarea" id="TransactionComments" />
                    </InputGroup>

                    <br></br>

                    <Button variant="warning" size="lg" block onClick={() => submitForm(authUser)} className="SubmitTransactionButton"
                        style={{ width: "104.2%", marginLeft: "-23px" }}>
                        Submit Transaction
                     </Button>
                </Form>


            </Container >
        )}

    </AuthUserContext.Consumer>

};


const condition = authUser => !!authUser;
export default withAuthorization(condition)(NewForm);