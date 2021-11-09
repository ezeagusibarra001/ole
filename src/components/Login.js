import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useHome } from "../context/home-context";
function Login() {
  let history = useHistory();
  const { login, logueado, setLogueado } = useHome();
  const [currentUser, setCurrentUser] = useState({
    user: "",
    pass: "",
  });
  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const submit = () => {
    console.log(currentUser);
    console.log(login);
    console.log(logueado);
    if (currentUser.user === login.user && currentUser.pass === login.pass) {
      setLogueado(true);
      history.push("/");
    } else {
      alert("Contraseña o Usuario incorrecto");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>USUARIO</Form.Label>
        <Form.Control
          type="text"
          placeholder="Usuario"
          name="user"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">VAMO QUILMES B</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>CONTRASEÑA</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="pass"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={submit}>
        INGRESAR
      </Button>
    </Form>
  );
}

export default Login;
