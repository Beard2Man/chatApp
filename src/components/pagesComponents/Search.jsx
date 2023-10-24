import React from "react";
import Chat from "../../components/img/Chat.png";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
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

export default Search;
