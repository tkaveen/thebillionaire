import React, { useState } from "react";
// import validate from "./validateinfo";
// import useForm from "./useForm";
import "./Signin.css";
import T1 from "../../../components/images/TB1.png";
import { useDispatch } from "react-redux";
import { login } from "../../../actions";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  return (
    <div className="formbackground-signin">
      <div className="FOcontainer-signin"></div>
      <div className="form-container-signin">
        <div className="form-content-left-signin">
          <img className="form-img-signin" src={T1} alt="spaceship" />
        </div>
        <div className="form-content-right-signin">
          <form className="form-signin" onSubmit={userLogin}>
            <h1>
              Welcome to The Billionaire!
              <br />
              Sign In here
            </h1>
            <div className="form-inputs-signin">
              <label className="form-label-signin">Email</label>
              <input
                className="form-input-signin"
                value={email}
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-inputs-signin">
              <label className="form-label-signin">Password</label>
              <input
                className="form-input-signin"
                value={password}
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="form-input-btn"
              type="submit"
              //   onClick={userLogin}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
