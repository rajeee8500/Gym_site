import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "antiquewhite",
        paddingTop: "100px",
      }}
    >
      <h1>Login Page</h1>
      <div className="login">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            id="pass"
            required
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
