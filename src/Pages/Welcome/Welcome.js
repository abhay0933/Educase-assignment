import "./welcome.css";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login");
  };

  const handleRegister = () => {
    navigate("register");
  };
  return (
    <div className="welcome-container">
      <div className="title-container">
        <h2 className="welcome-header">Welcome to PopX</h2>

        <p className="welcome-txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="auth-btns-container">
        <button className="welcome-btn welcome-login-btn" onClick={handleLogin}>
          Create an acount
        </button>
        <button
          className="welcome-btn welcome-register-btn"
          onClick={handleRegister}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
