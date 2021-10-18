import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Menubar from "./pages/Menubar/Menubar";
import NotFoundError from "./pages/NotFoundError/NotFoundError";
import Pricing from "./pages/Pricing/Pricing";
import Services from "./pages/Services/Services";
import Login from "./shared/Login/Login";
import Register from "./shared/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>{" "}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="*">
            <NotFoundError></NotFoundError>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;