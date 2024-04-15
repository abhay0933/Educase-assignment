import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    Phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleRegister = (event) => {
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
        <h2 className="login-title">Create your PopX account</h2>
      </div>

      <div className="signin-form-container">
        <form className="register-form">
          <div className="fieldset-wrapper">
            <fieldset>
              <legend>
                Full Name<span style={{ color: "red" }}>*</span>
              </legend>
              <input
                className="login-input"
                type="text"
                placeholder="first name"
                name="firstName"
                value={userData.firstName}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </fieldset>
            <fieldset>
              <legend>
                Phone Number<span style={{ color: "red" }}>*</span>
              </legend>
              <input
                className="login-input"
                type="number"
                placeholder="Phone"
                name="phone"
                value={userData.Phone}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </fieldset>
            <fieldset>
              <legend>
                Email address<span style={{ color: "red" }}>*</span>
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
                Password<span style={{ color: "red" }}>*</span>
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
            </fieldset>{" "}
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
            <fieldset>
              <legend>Company Name</legend>
              <input
                className="login-input"
                type="text"
                placeholder="Company"
                name="email"
                value={userData.company}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </fieldset>
            <label>
              Are you an agency ?<span style={{ color: "red" }}>*</span>
            </label>
            <div className="agency-radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
                Yes
              </div>
              <div>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
                No
              </div>
            </div>
          </div>

          <button
            className="register-btn"
            onClick={(event) => {
              handleRegister(event);
            }}
          >
            Create acount
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
