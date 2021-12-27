import React, { useState, useEffect } from 'react';
import { getDrivers } from '../../Requests';
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import driverImg from './driver.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default function Home() {
    const [drivers, setDrivers] = useState([]);


    useEffect(() => {
        (async () => {
            setDrivers(await getDrivers());

        })();
    }, []);
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {drivers.map((driver) => (
                <Card className="item_card">
                    <Card.Img className="card_img" src={driverImg} variant="top" />
                    <Card.Body>
                        <Card.Title>{driver.name} </Card.Title>
                        <Card.Text>{driver.age} </Card.Text>
                        <Link to={`/drivers/${driver.id}`}>
                            <Button className="card_button" variant="outline-dark">
                                View more
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}