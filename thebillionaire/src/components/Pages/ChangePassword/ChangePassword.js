import React, { useEffect, useState } from "react";
// import "./Signin.css";
import T1 from "../../../components/images/TB1.png";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ChangePassword = (props) => {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [backendError, setBackendError] = useState("");
  const auth = useSelector((state) => state.auth);

  const changePassword = (e) => {
    e.preventDefault();
    const passChange = {
      userId: auth.user._id,
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    axios
      .post("http://localhost:5000/api/resetPassword", passChange)
      .then((response) => {
        setBackendError(response.data.msg);
        if (response.data.msg === "Password updated!") {
          setNewPassword("");
          setConfirmPassword("");
          setCurrentPassword("");
        } else {
          console.log(response.data.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    // window.location.href = "/profile";
  };

  // const changePassword = (e) => {
  //   e.preventDefault();
  //   const passChange = {
  //     userId: auth.user._id,
  //     currentPassword: currentPassword,
  //     newPassword: newPassword,
  //     confirmPassword,
  //   };

  //   axios
  //     .post(`http://localhost:5000/api/resetPassword`, passChange)
  //     .then((res) => {
  //       console.log("ado" + res.data);
  //     });
  // };

  return (
    <div>
      <div className="formbackground-signin">
        <div className="FOcontainer-signin"></div>
        <div className="form-container-signin">
          <div className="form-content-left-signin">
            <img className="form-img-signin" src={T1} alt="spaceship" />
          </div>
          <div className="form-content-right-signin">
            <form className="form-signin" onSubmit={changePassword}>
              <h1>
                Reset your Password here!
                <br />
              </h1>
              <div style={{ color: "red", fontSize: 12 }}>{backendError}</div>

              <div className="form-inputs-signin">
                <label className="form-label-signin">Current Password</label>
                <input
                  className="form-input-signin"
                  value={currentPassword}
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-inputs-signin">
                <label className="form-label-signin">New Password</label>
                <input
                  className="form-input-signin"
                  value={newPassword}
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-inputs-signin">
                <label className="form-label-signin">Confirm Password</label>
                <input
                  className="form-input-signin"
                  value={confirmPassword}
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button className="form-input-btn" type="submit">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
