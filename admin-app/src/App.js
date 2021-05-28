import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getAllCategory } from "./actions/";
import Products from "./containers/Products/Products";
import Orders from "./containers/Orders/Orders";
import Category from "./containers/category/index";
import { getInitialData } from "./actions/initialData.action";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
