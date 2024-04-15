import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); 

  const handleOnChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" }); 
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    
      console.log(userData);
      navigate("/profile", { state: userData });
    } else {
      setErrors(validationErrors); 
    }
  };

const validateForm = () => {
    const validationErrors = {};

    if (!userData.email) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!userData.password) {
      validationErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
  
    return validationErrors;
  };

  return (
    <div className="login-container">
      <div className="login-title-wrapper">
        <h2 className="login-title">Signin to your PopX account</h2>

        <p className="login-title-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="signin-form-container">
        <form className="login-form">
          <fieldset>
            <legend>
              Email<span style={{ color: "red" }}>*</span>{" "}
            </legend>
            <input
              className="login-input"
              type="email"
              placeholder="Enter email address"
              name="email"
              value={userData.email}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </fieldset>
          {errors.email && <p className="error-message">{errors.email}</p>}
          <fieldset>
            <legend>
              Password<span style={{ color: "red" }}>*</span>{" "}
            </legend>
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
              name="password"
              value={userData.password}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </fieldset>
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          <button
            className="login-btn"
            onClick={(event) => {
              handleLogin(event);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
