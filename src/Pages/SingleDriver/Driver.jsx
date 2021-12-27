import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import driverImg from './driver.jpg';
import { getDriverById} from "../../Requests";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Driver.css";



export default function Driver() {


    const { id } = useParams();
    const [driver, setDriver] = useState([]);

    async function getDriver() {
        const driver = await getDriverById(id);
        setDriver(driver);
    }
    useEffect(() => getDriver(), []);

    return (
        <div className="item-page">
            <Row>
                <Col className="image-box">
                    <img src={driverImg} alt="Film" className="item-image" />
                    <h1 className="movie-title"> {driver.name}</h1>
                </Col>
                <Col xs={9}>
                    <Link to="/">
                        <Button variant="outline-dark" style={{ marginLeft: "700px" }}>
                            Go Back
                        </Button>
                    </Link>

                    <div className="info" style={{ fontWeight: "bold" }}>
                        Name
                    </div>
                    <div className="info">
                        {driver.name}
                    </div>
                    <div className="info" style={{ fontWeight: "bold" }}>
                        <p /> Age
                    </div>
                    <div className="info">
                        {driver.age}
                    </div>

                </Col>
            </Row>
        </div >
    );
}