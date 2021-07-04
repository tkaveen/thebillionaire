import React, { useState } from "react";
import validate from "./validateinfo";
import useForm from "./useForm";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../actions/auth.action";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

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

const FormSignup = ({ submitForm }) => {
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
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  // const userSignup = (e) => {
  //   e.preventDefault();

  //   const user = {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //   };
  //   dispatch(signup(user));
  // };

  const userSignup = (e) => {
    e.preventDefault();

    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/profile`} />;
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
    <div className="form-content-right">
      <form onSubmit={userSignup} className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={firstName}
            // onChange={handleChange}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={lastName}
            // onChange={handleChange}
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        {/* <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div> */}
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={password}
            // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {user.message}
          </Alert>
        </Snackbar>
        <span className="form-input-login">
          Already have an account? Login <a href="/signin">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
