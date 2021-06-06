import React from "react";
import "./App.css";
import Home from "./components/Pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Pages/Footer/Footer";
import ProductListPage from "./components/Pages/ProductList/ProductListPage";
import Signin from "./components/Pages/Signin/Signin";
import Form from "./components/Pages/SignUp/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <nav></nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:slug" component={ProductListPage} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Form} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
