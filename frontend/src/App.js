import './App.css';
import './Normalize.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import HabitacionesPage from "./pages/HabitacionesPage";
import ServiciosPage from "./pages/ServiciosPage";
import ReservasPage from "./pages/ReservasPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/habitaciones" exact component={HabitacionesPage} />
        <Route path="/servicios" exact component={ServiciosPage} />
        <Route path="/reservas" exact component={ReservasPage} />
      </Switch>
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
