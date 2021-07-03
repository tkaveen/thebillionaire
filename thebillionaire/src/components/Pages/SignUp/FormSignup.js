import React, { useState } from "react";
import validate from "./validateinfo";
import useForm from "./useForm";
import "./Form.css";
import { useDispatch } from "react-redux";
import { signup as _signup } from "../../../actions/auth.action";

const FormSignup = ({ submitForm }) => {
  // const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  return (
    <div className="form-content-right">
      <form onSubmit={userSignup} className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={firstName}
            // onChange={handleChange}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={lastName}
            // onChange={handleChange}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
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
          {errors.email && <p>{errors.email}</p>}
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
            value={password2}
            // onChange={handleChange}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/signin">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
