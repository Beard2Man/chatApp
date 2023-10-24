import React from "react";
import Chat from "../components/img/Chat.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <a href="home">
          <img src={Chat} alt="Logo" />
        </a>
        <span className="logo">Moustache Chat </span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="Name..." />
          <input type="password" placeholder="Password..." />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
