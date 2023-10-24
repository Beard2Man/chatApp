import React from "react";
import Chat from "../img/Chat.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <a href="home">
          <img src={Chat} alt="Logo" />
        </a>
        <span className="logo">Moustache Chat </span>
      </div>
      <div className="user">
        <img src="" alt="" />
        <span>User</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
