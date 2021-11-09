import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Ecomerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Registro">Registro</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Login">Login</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
