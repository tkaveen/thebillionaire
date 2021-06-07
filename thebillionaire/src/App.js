import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Pages/Footer/Footer";
import ProductListPage from "./components/Pages/ProductList/ProductListPage";
import Signin from "./components/Pages/Signin/Signin";
import Form from "./components/Pages/SignUp/Form";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import ProductOverview from "./components/Pages/ProductList/ProductOverview";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Form} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductOverview}
          />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
