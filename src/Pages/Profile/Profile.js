import React from "react";
import { useLocation } from "react-router-dom";
import icon from "../../assets/profile/Ellipse 114@2x.jpg";
import "./profile.css";
const Profile = () => {
  const { state } = useLocation();
  return (
    <div className="profile-container">
      <div className="profile-header-wrapper">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-content-container">
        <div className="profile-info-wrapper">
          <div className="profile-icon-wrapper">
            <img src={icon} alt="profile" />
          </div>
          <div className="profile-name">
            <p>
              {state.firstName && state.firstName.length > 0
                ? state.firstName
                : state.email}
            </p>
            <p>{state.email}</p>
          </div>
        </div>
        <div className="profile-body-wrapper">
          <p className="lorem">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
