import React, { useState } from "react";
import { addCar } from "../../Requests";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./CarAdd.css";

export default function CarAdd() {



    const [brand, setBrand] = useState('');
    const [license_plate_number, setLicensePlateNumber] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const driver = {
            'brand': brand, 'license_plate_number': license_plate_number,
        };

        for (var key in driver) {
            if (driver[key].replace(/\s+/g, '') === "") {
                delete driver[key]
            }
        }

        await addCar(driver);


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
                    <Form.Label>Brand</Form.Label>
                    <Form.Control value={brand} onChange={(e) => setBrand(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>

            <Form className="form">
                <Form.Group >
                    <Form.Label>License plate number</Form.Label>
                    <Form.Control value={license_plate_number} onChange={(e) => setLicensePlateNumber(e.target.value)} type="textarea" />
                </Form.Group>

            </Form>

            <Button onClick={async (e) => { await handleSubmit(e) }}
                variant="outline-success" type="submit" className="botom-button">
                Add
            </Button>

        </div>

    );
}