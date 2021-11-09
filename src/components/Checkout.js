import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Checkout() {
  const finalizar = () => {
    alert("GRACIAS POR SU COMPRA");
    window.location.href = "/";
  };

  return (
    <Card
      style={{
        width: "18rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "1.5rem",
      }}
    >
      <Card.Img variant="top" src={sessionStorage.getItem("photo_url")} />
      <Card.Body>
        <Card.Title>{sessionStorage.getItem("name")}</Card.Title>
        <Card.Text>${sessionStorage.getItem("price")}</Card.Text>
        <Card.Text>{sessionStorage.getItem("description")}</Card.Text>
        <Button variant="primary" onClick={finalizar}>
          Finalizar Compra
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Checkout;
