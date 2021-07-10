// import { Input } from "@material-ui/core";
import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/Ui/Input";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import T1 from "../../images/TB1.png";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
}

export default function Signup() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();

    if (firstName === "") {
      alert("First Name can't be empty!");
      return;
    }

    if (lastName === "") {
      alert("Last Name can't be empty!");
      return;
    }

    if (email === "") {
      alert("Email can't be empty!");
      return;
    }

    if (password === "") {
      alert("Password can't be empty!");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (user.loading) {
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          loading...
        </Alert>
      </Snackbar>
    );
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
                  <h3>Admin Signup</h3>
                  <br />
                  <Form onSubmit={userSignup}>
                    <Row>
                      <Col md={6}>
                        <Input
                          label="First Name"
                          placeholder="First Name"
                          value={firstName}
                          type="text"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Col>
                      <Col md={6}>
                        <Input
                          label="Last Name"
                          placeholder="Last Name"
                          value={lastName}
                          type="text"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Col>
                    </Row>
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
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleClick}
                    >
                      Submit
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleClose} severity="success">
                        {user.message}
                      </Alert>
                    </Snackbar>
                  </Form>
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
