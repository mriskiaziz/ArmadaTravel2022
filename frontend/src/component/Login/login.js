import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  return (
    <div className="container">
      <div className="box">
        <h3>Armada Travel</h3>
        <form action="" method="">
          <label>Username</label>
          <input type="text" name="info" />
          <label>Password</label>
          <input type="text" name="info" />
        </form>
        <Link to="/dashboard" className="btn">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Login;
