import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="optionMenu" to="/">
            QUILMES B
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="optionMenu" to="/Crear">
              CREAR
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="optionMenu" to="/Login">
              INICIAR SESION
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
