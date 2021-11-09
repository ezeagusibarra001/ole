import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "./css/Crear.css";
function Crear() {
  const [currentTapa, setCurrentTapa] = useState({
    title: localStorage.getItem("title"),
    description: localStorage.getItem("description")
  })
  const handleChangeTitle = (e) => {
    localStorage.setItem("title", e.target.value)
    setCurrentTapa({ ...currentTapa, [e.target.name]: e.target.value });
  }
  const handleChangeDescription = (e) => {
    localStorage.setItem("description", e.target.value)
    setCurrentTapa({ ...currentTapa, [e.target.name]: e.target.value });
  }
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
        <input type="text" value={currentTapa.title} name="title" onChange={handleChangeTitle}/>
      </h1>
      <p className="description">
      <input type="text" value={currentTapa.description} name="description" onChange={handleChangeDescription}/>
      </p>
    </div>
  );
}

export default Crear;
