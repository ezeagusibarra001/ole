import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Checkout" component={Checkout} />
      </div>
    </Router>
  );
}

export default App;
