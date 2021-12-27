import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCarById} from "../../Requests";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./SingleCar.css";



export default function SingleCar() {


    const { id } = useParams();
    const [car, setCar] = useState([]);

    async function getCar() {
        const car = await getCarById(id);
        setCar(car);
    }
    useEffect(() => getCar(), []);

    return (
        <div className="item-page">
            <Row>
                <Col className="image-box">
                    <img src='https://bit.ly/3qqnfFP' alt="Car" className="item-image" />
                    <h1 className="movie-title"> {car.name}</h1>
                </Col>
                <Col xs={9}>
                    <Link to="/">
                        <Button variant="outline-dark" style={{ marginLeft: "700px" }}>
                            Go Back
                        </Button>
                    </Link>

                    <div className="info" style={{ fontWeight: "bold" }}>
                        Brand
                    </div>
                    <div className="info">
                        {car.brand}
                    </div>
                    <div className="info" style={{ fontWeight: "bold" }}>
                        <p /> License plate number
                    </div>
                    <div className="info">
                        {car.license_plate_number}
                    </div>

                </Col>
            </Row>
        </div >
    );
}