import React from "react";
// import validate from "./validateinfo";
// import useForm from "./useForm";
import "./Signin.css";
import T1 from "../../../components/images/TB1.png";

const SignIn = () => {
  //   const { handleChange, handleSubmit, values, errors } = useForm(
  //     submitForm,
  //     validate
  //   );

  return (
    <div className="formbackground-signin">
      <div className="FOcontainer-signin"></div>
      <div className="form-container-signin">
        <div className="form-content-left-signin">
          <img className="form-img-signin" src={T1} alt="spaceship" />
        </div>
        <div className="form-content-right-signin">
          <form className="form-signin" noValidate>
            <h1>
              Welcome to The Billionaire!
              <br />
              Sign In here
            </h1>
            {/* <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div> */}
            <div className="form-inputs-signin">
              <label className="form-label-signin">Email</label>
              <input
                className="form-input-signin"
                type="email"
                name="email"
                placeholder="Enter your email"
                // value={values.email}
                // onChange={handleChange}
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            <div className="form-inputs-signin">
              <label className="form-label-signin">Password</label>
              <input
                className="form-input-signin"
                type="password"
                name="password"
                placeholder="Enter your password"
                // value={values.password}
                // onChange={handleChange}
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            {/* <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
            <button className="form-input-btn" type="submit">
              Sign In
            </button>
            {/* <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
