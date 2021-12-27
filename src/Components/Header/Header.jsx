import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ marginLeft: "7%" }} className="mr-auto">
          <h1 className="title">Uber 2</h1>

          <NavLink to="/cars" className='nav_link' style={{ marginTop: "8px" }} exact={true}>
            Cars
          </NavLink>
        </Nav>

        <Nav >
          <NavLink to="/" className='nav_link' activeClassName="nav_link_active" exact={true}>
            Drivers
          </NavLink>
        </Nav>

        <Nav >
          <NavLink to="/cars/add" className='nav_link' activeClassName="nav_link_active" exact={true}>
            Add Car
          </NavLink>
        </Nav>

        <Nav >
          <NavLink to="/drivers/add" className='nav_link' activeClassName="nav_link_active" exact={true}>
            Add driver
          </NavLink>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
}