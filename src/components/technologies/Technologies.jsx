import React from "react";
import './technologies.css'
import html from "../../../images/html.png";
import react from "../../../images/react.png";
import css from "../../../images/css.png";
import bootstrap from "../../../images/bootstrap.png";
import vscode from "../../../images/vscode.png";
import postman from "../../../images/postman.png";
import github from "../../../images/github.png";
import js from "../../../images/js.png";
import python from "../../../images/python.png";
import java from "../../../images/java.png";
import audition from "../../../images/audition.png";

const Technologies = () => {
  return (
    <>
      <div className="technology">
        <div className="top2">
          <h1>Tech Stack</h1>
          <p>Technologies I learn</p>
          <div className="img">
            <img src={python} alt="python" />
            <img src={java} alt="java" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="javascript" />
            <img src={react} alt="react" />
            <img src={bootstrap} alt="bootstrap" />
          </div>
        </div>
        <hr />  
        <div className="bottom">
          <h1>Tools</h1>
          <div className="img">
            <img src={vscode} alt="vscode" />
            <img src={github} alt="github" />
            <img src={postman} alt="postman" />
            <img src={audition} alt="audition" />
          </div>
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

export default Technologies;
