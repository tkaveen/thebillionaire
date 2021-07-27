import React, { useEffect, useState } from "react";
import { Jumbotron, Col, Row, Container, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./Home.css";
import { NavLink } from "react-router-dom";
import BarChart from "../../components/Chart/BarChart";
import BarTwo from "../../components/Chart/BarTwo";
import LineChart from "../../components/Chart/LineChart";
import TB2 from "../../images/TB2.png";
import { BsFillPersonFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [income, setIncome] = useState([]);

  // axios
  //   .get("http://localhost:5000/api/order/getChartDetailsFour")
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/order/getChartDetailsFour`)
      .then((res) => {
        setData(res.data);
      });
  };

  const getIncome = async () => {
    await axios
      .get(`http://localhost:5000/api/order/getChartDetailsFive`)
      .then((res) => {
        setIncome(res.data);
      });
  };

  useEffect(() => {
    getData();
    getIncome();
  }, []);

  return (
    <Layout sidebar>
      <Container fluid>
        <Jumbotron className="jumbHome">
          <Row>
            <Col md={2}>
              <img src={TB2} />
            </Col>
            <Col md={10}>
              <h2
                className="text-center"
                style={{
                  marginTop: "35px",
                  marginLeft: "50px",
                }}
              >
                Welcome to The Billionaire Clothing <br /> Admin Dashboard
              </h2>
            </Col>
          </Row>
        </Jumbotron>
        <Row>
          <Col>
            <Col>
              <Row>
                <Card
                  className="shortCart"
                  style={{
                    width: "46rem",
                    height: "130px",
                    borderRadius: "10px",
                    boxShadow: "3px 3px red, -1em 0 .4em olive",
                    backgroundColor: "rgb(52, 58, 64)",
                    marginBottom: "25PX",
                    borderLeft: "12px solid #e42c45",
                  }}
                >
                  <Row>
                    <Col>
                      <h3
                        style={{
                          marginLeft: "20px",
                          marginTop: "50px",
                          color: "white",
                        }}
                      >
                        Total Revenue
                      </h3>
                    </Col>
                    <Col>
                      <h1
                        style={{
                          marginLeft: "50px",
                          marginTop: "30px",
                          color: "white",
                          fontSize: "60px",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <div>Rs.</div>
                          <div>{income.total_income}</div>
                        </div>
                      </h1>
                    </Col>
                  </Row>
                </Card>
              </Row>
              <Row>
                <Row>
                  <Col>
                    <Card
                      style={{
                        width: "22rem",
                        height: "130px",
                        borderRadius: "10px",
                        boxShadow: "3px 3px red, -1em 0 .4em olive",
                        backgroundColor: "rgb(52, 58, 64)",
                        marginBottom: "26PX",
                        borderLeft: "12px solid #0f1abd",
                      }}
                    >
                      <Row>
                        <Col>
                          <h3
                            style={{
                              marginLeft: "20px",
                              marginTop: "50px",
                              color: "white",
                            }}
                          >
                            Products
                          </h3>
                        </Col>
                        <Col>
                          <h1
                            style={{
                              marginLeft: "18px",
                              marginTop: "30px",
                              color: "white",
                              fontSize: "60px",
                            }}
                          >
                            {data.products}
                          </h1>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card
                      style={{
                        width: "22rem",
                        height: "130px",
                        borderRadius: "10px",
                        boxShadow: "3px 3px red, -1em 0 .4em olive",
                        backgroundColor: "rgb(52, 58, 64)",
                        marginBottom: "26PX",
                        borderLeft: "12px solid rgba(153, 102, 255)",
                      }}
                    >
                      <Row>
                        <Col>
                          <h3
                            style={{
                              marginLeft: "20px",
                              marginTop: "50px",
                              color: "white",
                            }}
                          >
                            Categories
                          </h3>
                        </Col>
                        <Col>
                          <h1
                            style={{
                              marginLeft: "40px",
                              marginTop: "30px",
                              color: "white",
                              fontSize: "60px",
                            }}
                          >
                            {data.categories}
                          </h1>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Row>
                  <Col>
                    {" "}
                    <Card
                      style={{
                        width: "22rem",
                        height: "130px",
                        borderRadius: "10px",
                        boxShadow: "3px 3px red, -1em 0 .4em olive",
                        backgroundColor: "rgb(52, 58, 64)",
                        marginBottom: "26PX",
                        borderLeft: "12px solid rgba(75, 192, 192)",
                      }}
                    >
                      <Row>
                        <Col>
                          <h3
                            style={{
                              marginLeft: "20px",
                              marginTop: "50px",
                              color: "white",
                            }}
                          >
                            Orders
                          </h3>
                        </Col>
                        <Col>
                          <h1
                            style={{
                              marginLeft: "18px",
                              marginTop: "30px",
                              color: "white",
                              fontSize: "60px",
                            }}
                          >
                            {data.orders}
                          </h1>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card
                      style={{
                        width: "22rem",
                        height: "130px",
                        borderRadius: "10px",
                        boxShadow: "3px 3px red, -1em 0 .4em olive",
                        backgroundColor: "rgb(52, 58, 64)",
                        marginBottom: "26PX",
                        borderLeft: "12px solid rgba(255, 99, 132)",
                      }}
                    >
                      <Row>
                        <Col>
                          <h3
                            style={{
                              marginLeft: "20px",
                              marginTop: "50px",
                              color: "white",
                            }}
                          >
                            Customers
                          </h3>
                        </Col>
                        <Col>
                          <h1
                            style={{
                              marginLeft: "40px",
                              marginTop: "30px",
                              color: "white",
                              fontSize: "60px",
                            }}
                          >
                            {data.users}
                          </h1>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Col>
          <Col>
            <Card
              style={{
                width: "47.3rem",
                borderRadius: "10px",
                boxShadow: "3px 3px red, -1em 0 .4em olive",
                backgroundColor: "rgb(52, 58, 64)",
              }}
            >
              <Card.Body>
                <LineChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card
              className="chartcard"
              style={{
                width: "46rem",
                borderRadius: "10px",
                boxShadow: "3px 3px red, -1em 0 .4em olive",
                backgroundColor: "rgb(52, 58, 64)",
              }}
            >
              <Card.Body>
                <BarChart />
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "46.3rem",
                borderRadius: "10px",
                boxShadow: "3px 3px red, -1em 0 .4em olive",
                backgroundColor: "rgb(52, 58, 64)",
              }}
            >
              <Card.Body>
                <BarTwo />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
      </Container>
    </Layout>
  );
}
