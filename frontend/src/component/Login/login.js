import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  return (
    <div className="container">
      <h2>Login Staff & Teknisi</h2>
      <div className="box">
        <form action="" method="">
          <input type="text" name="info" placeholder="Email Pengguna" />
          <input type="text" name="info" placeholder="Kata Sandi" />
        </form>
        <Link to="/dashboard" className="btn">
          LOGIN
        </Link>
        <h4>
          Lupa password ? Klik <span>di sini</span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Login;
