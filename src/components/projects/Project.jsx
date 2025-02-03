import React from "react";
import "./project.css";

const Project = () => {
  return (
    <>
      <div className="project">
        <h1>Projects</h1>
        <div className="carts">
          <div className="cart">
            <h4>Weather, News and Shop website</h4>
            <p>
              Develop a website which gives you a real time weather of any city
              and you can also see the news on any specific topic. You can also
              search for any amazon product which you want to buy.
            </p>
            <p>
              <b>Tech Stack:</b> HTML/CSS, Javascript and Express js.
            </p>
            <button>
              <i class="fa-solid fa-link"></i>{" "}
              <a
                target="_blank"
                href="https://github.com/ChauhanAnas/Weather-news-and-shop"
              >
                Github link
              </a>
            </button>
          </div>
          <div className="cart">
            <h4>ChatGPT based website</h4>
            <p>
              Develop a website like chatgpt using Copilot API. It allow to plan
              a trip, It also allow user to get recipe of any food item and user
              can also get the gym fitness tips through this website.
            </p>
            <p>
              <b>Tech Stack:</b> HTML/CSS, MongoDB, Javascript, JWT
              Authenticator, Express js.
            </p>
            <button>
              <i class="fa-solid fa-link"></i>{" "}
              <a
                target="_blank"
                href="https://github.com/ChauhanAnas/ChatGPT-based-website"
              >
                Github link
              </a>
            </button>
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
export default Project;