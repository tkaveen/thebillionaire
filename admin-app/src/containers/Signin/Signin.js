import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Ui/Input";
import { Redirect } from "react-router-dom";
import T1 from "../../images/TB1.png";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Email can't be empty!");
      return;
    }

    if (password === "") {
      alert("Password can't be empty!");
      return;
    }

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <Container>
        <div
          className="shadow p-3 mb-5 bg-body rounded bg-light text-dark "
          style={{ marginTop: "200px" }}
        >
          <Row style={{ marginTop: "70px" }}>
            <Col>
              <img
                src={T1}
                style={{ marginTop: "55px", marginLeft: "50px" }}
              ></img>
            </Col>
            <Col>
              <Row>
                <Col md={{ span: 9, offset: 1 }}>
                  <h3>Admin Signin</h3>
                  <br />
                  <Form onSubmit={userLogin}>
                    <Input
                      label="Email"
                      placeholder="Email"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      label="Password"
                      placeholder="Password"
                      value={password}
                      type="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}
