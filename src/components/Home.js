import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "./css/Crear.css";
function Home() {
  return (
    <div>
      <Navbar expand={false} className="headerCrear">
        <Container fluid>
          <Navbar.Toggle className="navbarTogle" />
          <img
            alt="Logo Olé"
            src="https://www.ole.com.ar/bundles/olesite/images/logoblankorig.png?1d6068d"
          />
          <p className="p">Ingresar</p>
          <p className="p">Suscribirme</p>
        </Container>
      </Navbar>
      <Card.Img
        variant="top"
        className="card"
        src="https://images.ole.com.ar/2021/04/27/V6cd5vTsK_386x280__1.jpg"
      />
      <h1 className="titleCard">
        {localStorage.getItem("title")}
      </h1>
      <p className="description">
      {localStorage.getItem("description")}
      </p>
    </div>
  );
}

export default Home;
