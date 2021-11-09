import "./App.css";
import { HomeProvider } from "./context/home-context";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Crear from "./components/Crear";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  if (window.innerWidth < 800) {
    return (
      <HomeProvider>
        <Router>
          <div className="App">
            <Menu />
            <Route exact path="/" component={Home} />
            <Route exact path="/Crear" component={Crear} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Checkout" component={Checkout} />
          </div>
        </Router>
      </HomeProvider>
    );
  }else{
    return(
      <h1>This app is only available in mobile devices :)</h1>
    )
  }
}

export default App;
