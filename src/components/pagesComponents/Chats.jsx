import React from "react";
import Chat from "../img/Chat.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Chat} alt="Logo" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Chat} alt="Logo" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Chat} alt="Logo" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Chat} alt="Logo" />
        <div className="userChatInfo">
          <span>User</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
