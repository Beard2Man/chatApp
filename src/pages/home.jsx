import React from "react";
import Sidebar from "../components/pagesComponents/Sidebar";
import Chat from "../components/pagesComponents/Chat";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
