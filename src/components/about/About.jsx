import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="About">
        <div className="top">
          <h1>About Me</h1>
          <p>
            As a driven and technically adept computer science student, I am
            committed to harnessing my skills in software engineering, data
            structures, and algorithmic thinking to contribute to groundbreaking
            projects that advance technology and improve lives. With a passion
            for innovation and a dedication to continuous learning, I aim to
            collaborate with forward-thinking teams to create elegant, efficient
            solutions that push the boundaries of what is possible.
          </p>
        </div>
        <div className="Experience">
          <h1>Work Experience</h1>
          <div className="content">
            <div className="leftExp">
              <h4>Software Developer Intern</h4>
              <div className="align_line">
                <p>
                  <i class="fa-regular fa-building"></i> Prutor@IITK
                </p>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Noida
                </p>
              </div>
            </div>
            <div className="rightExp">
              <span>Intern</span>
              <p>Sept 2024 - Present</p>
            </div>
          </div>
          <hr />
          <div className="content">
            <div className="leftExp">
              <h4>Software Developer Intern</h4>
              <div className="align_line">
                <p>
                  <i class="fa-regular fa-building"></i> 4 Way Technologies
                </p>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Delhi
                </p>
              </div>
            </div>
            <div className="rightExp">
              <span>Intern</span>
              <p>April 2024 - May 2024</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="education">
          <h1>Education</h1>
          <div className="content">
            <div className="leftExp">
              <h4>Computer Science and Engineering</h4>
              <div className="align_line">
                <p>
                  <i class="fa-regular fa-building"></i> Bharat Institute of
                  Technology
                </p>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Meerut
                </p>
              </div>
            </div>
            <div className="rightExp">
              <span>Reguler</span>
              <p>Sept 2021 - July 2025</p>
            </div>
          </div>
          <hr />
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

export default About;
