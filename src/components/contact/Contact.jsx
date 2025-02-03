import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1>To connect with me drop a mail</h1>
        <h2 className="email">anaschauhan13@gmail.com</h2>
        <p>or</p>
        <h2 className="number">+91 7310985630</h2>
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
export default Contact;