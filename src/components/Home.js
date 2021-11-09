import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductoDetalle from "./ProductoDetalle";

function Home() {
  const [productos, setProductos] = useState([]);
  const [currentProducto, setCurrentProducto] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    await axios
      .get("https://jsonfy.com/items")
      .then((res) => {
        console.log("PRODUCTOS", res.data);
        setProductos(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const viewDetalle = (producto) => {
    setShow(true);
    console.log("CURRENT PRODUCTO", producto);
    setCurrentProducto(producto);
  };

  return (
    <div>
      <h1>Productos</h1>
      {productos.map((producto) => (
        <Card
          style={{
            width: "18rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1.5rem",
          }}
        >
          <Card.Img variant="top" src={producto.photo_url} />
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
            <Button variant="primary" onClick={() => viewDetalle(producto)}>
              Ver Detalle
            </Button>
          </Card.Body>
        </Card>
      ))}
      <ProductoDetalle
        show={show}
        setShow={setShow}
        currentProducto={currentProducto}
      />
    </div>
  );
}

export default Home;
