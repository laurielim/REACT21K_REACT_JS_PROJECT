import React from "react";
import "./Footer.css";

const Footer = () => {
  let today = new Date();

  return (
    <footer>
      <p>
        Made by <a href="//laurielim.github.io/">Laurie Lim Sam</a>. Copyright{" "}
        {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
