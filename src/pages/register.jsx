import React from "react";
import Chat from "../components/img/Chat.png";
import addAvatar from "../components/img/addAvatar.png";
import "../../src/style.scss";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <a href="home">
          <img src={Chat} alt="Logo" />
        </a>
        <span className="logo">Moustache Chat </span>
        <span className="title">Registration</span>
        <form>
          <input type="text" placeholder="Add Name..." />
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <input
            style={{ display: "none" }}
            className="file"
            type="file"
            id="file"
          />
          <label htmlFor="file">
            <img className="addAvatar" src={addAvatar} alt="" />
            <span style={{ cursor: "pointer" }}>Add an avatar</span>
          </label>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
