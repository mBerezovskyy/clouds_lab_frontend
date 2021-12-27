import React, { useState } from "react";
import { addDriver } from "../../Requests";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./DriverAdd.css";

export default function DriverAdd() {



    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const driver = {
            'name': name, 'age': age,
        };

        for (var key in driver) {
            if (driver[key].replace(/\s+/g, '') === "") {
                delete driver[key]
            }
        }

        await addDriver(driver);


    }


    return (
        <div className='wrapper'>
            <Link to="/">
                <Button variant="outline-dark" style={{ marginLeft: "800px" }}>
                    Go Back
                </Button>
            </Link>

            <Form className="form">
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>

            <Form className="form">
                <Form.Group >
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>

            <Button onClick={async (e) => { await handleSubmit(e) }}
                variant="outline-success" type="submit" className="botom-button">
                Add
            </Button>

        </div>

    );
}