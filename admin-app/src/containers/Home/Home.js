import React from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Layout sidebar >
      <Jumbotron>
        <h3 className='text-center'>Welcome to The Billionaire Clothing <br/> Admin Dashboard</h3>
      </Jumbotron>
      {/* <div>
  <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  <div className="b-example-divider" />
  <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: 280}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  <div className="b-example-divider" />
  <div className="d-flex flex-column flex-shrink-0 bg-light" style={{width: '4.5rem'}}>
    <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      <svg className="bi" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
        <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width={24} height={24} role="img" aria-label="Home"><use xlinkHref="#home" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width={24} height={24}><use xlinkHref="#speedometer2" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width={24} height={24}><use xlinkHref="#table" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width={24} height={24}><use xlinkHref="#grid" /></svg>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width={24} height={24}><use xlinkHref="#people-circle" /></svg>
        </a>
      </li>
    </ul>
    <div className="dropdown border-top">
      <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width={24} height={24} className="rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</div> */}

     

      {/* <Jumbotron className="text-center" style={{ margin: "5rem" }}>
        <h1>Welcome to Admin Dashboard</h1>
        <br></br>
        <p>
          Et aut est dolor voluptatem natus aut architecto et vel. Enim laborum
          a. Velit vel et. Sit saepe vel excepturi eos reprehenderit rerum
          commodi ut. Quia sunt corporis exercitationem eveniet et quia esse
          consectetur doloribus. Et aut est dolor voluptatem natus aut
          architecto et vel. Enim laborum a. Velit vel et. Sit saepe vel
          excepturi eos reprehenderit rerum commodi ut. Quia sunt corporis
          exercitationem eveniet et quia esse consectetur doloribus. Et aut est
          dolor voluptatem natus aut architecto et vel. Enim laborum a. Velit
          vel et. Sit saepe vel excepturi eos reprehenderit rerum commodi ut.
          Quia sunt corporis exercitationem eveniet et quia esse consectetur
          doloribus.
        </p>
      </Jumbotron> */}
    </Layout>
  );
}
