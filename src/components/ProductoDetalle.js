import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function ProductoDetalle(props) {
  const { show, setShow, currentProducto } = props;
  const handleClose = () => {
    setShow(false);
  };

  const finalizarCompra = (currentProducto) => {
    sessionStorage.setItem("name", currentProducto.name);
    sessionStorage.setItem("photo_url", currentProducto.photo_url);
    sessionStorage.setItem("price", currentProducto.price);
    sessionStorage.setItem("description", currentProducto.description);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{currentProducto.name}</Modal.Title>
      </Modal.Header>
      <Card.Img variant="top" src={currentProducto.photo_url} />
      <Modal.Title>${currentProducto.price}</Modal.Title>
      <Modal.Body>{currentProducto.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="light">
          <Link to="/Checkout" onClick={() => finalizarCompra(currentProducto)}>
            Comprar
          </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductoDetalle;
