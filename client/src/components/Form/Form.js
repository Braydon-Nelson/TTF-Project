import React, { useState } from "react";
import SubmitTransaction from "../SubmitTransaction";
import DatePicker from "react-datepicker";
import { Row, Col, Input, InputGroup, Container, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function NewForm() {

    const [startDate, setStartDate] = useState(new Date())

    function handleChange(date) {
        setStartDate(date);
    };


    return (
        <Container className="formContainer">

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Transaction Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-describedby="inputGroup-sizing-default" />
            </InputGroup>



            <DatePicker className="mb-3"
                selected={startDate}
                onChange={handleChange}
            />


            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Transaction Amount" aria-label="Amount (to the nearest dollar)" />
            </InputGroup>


            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Transaction Type"
                    aria-label="Transaction Type"
                    aria-describedby="basic-addon2"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                >
                    <Dropdown.Item>Income</Dropdown.Item>
                    <Dropdown.Item>Expense</Dropdown.Item>
                </DropdownButton>
            </InputGroup>


            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Transaction Category"
                    aria-label="Transaction Category"
                    aria-describedby="basic-addon2"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                >

                    <Dropdown.Item href="#">Rent/Mortgage</Dropdown.Item>
                    <Dropdown.Item href="#">Utilities</Dropdown.Item>
                    <Dropdown.Item href="#">Groceries or Dining </Dropdown.Item>
                    <Dropdown.Item href="#">Retail/Shopping</Dropdown.Item>
                    <Dropdown.Item href="#">Education</Dropdown.Item>
                </DropdownButton>
            </InputGroup>




            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Comments</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>

            <br></br>


            <SubmitTransaction>
            </SubmitTransaction>

        </Container >

    );
}