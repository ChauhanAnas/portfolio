import React from "react";
import profile from "../../../images/profilr.jpg";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="leftHome">
          <h1>Hey...👋</h1>
          <h1>My Name is</h1>
          <h1 className="name">Anas Chauhan</h1>
          <h1>I build things for web</h1>
        </div>
        <div className="rightHome">
          <img src={profile} alt="" width="350px" />
        </div>
      </div>
      <footer>
        <p>
          Designed and Coded by Anas Chauhan with <span>Love</span> &{" "}
          <span>Lays</span>
        </p>
      </footer>
    </>
  );
};

export default Home;
