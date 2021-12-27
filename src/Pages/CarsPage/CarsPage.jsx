import React, { useState, useEffect } from 'react';
import { getCars } from '../../Requests';
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarsPage.css";

export default function CarsPage() {
    const [cars, setCars] = useState([]);


    useEffect(() => {
        (async () => {
            setCars(await getCars());

        })();
    }, []);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {cars.map((car) => (
                <Card className="item_card">
                    <Card.Img className="card_img" src='https://bit.ly/3qqnfFP' variant="top" />
                    <Card.Body>
                        <Card.Title>{car.brand} </Card.Title>
                        <Card.Text>{car.license_plate_number} </Card.Text>
                        <Link to={`/cars/${car.id}`}>
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