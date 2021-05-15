import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './components/Pages/HomePage/Home';
import Services from './components/Pages/Services/Services';
import Products from './components/Pages/Products/Products';
import SignUp from './components/Pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import nav from './components/NavbarNew'
import Footer from './components/Pages/Footer/Footer';
import Mens from './components/Pages/MensProducts';
import Womens from './components/Pages/WomensProducts';
import Prodover from './components/Pages/ProductOverview';
import Form from  './components/Pages/SignUp/Form';

function App() {
  return (
    <Router>
    {/* <Mens></Mens> */}
    {/* <Womens></Womens> */}
    <Prodover></Prodover>
    
    {/* <SignUp></SignUp> */}
    {/* <Form></Form> */}
    </Router>

    // <Router>
    //   <Navbar></Navbar>
    //   {/* <nav></nav> */}
    //   <Switch>        
    //     <Route path='/' exact component={Home} />
    //     <Route path='/services' component={Services} />
    //     <Route path='/products' component={Products} />
    //     <Route path='/sign-up' component={SignUp} />
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;
