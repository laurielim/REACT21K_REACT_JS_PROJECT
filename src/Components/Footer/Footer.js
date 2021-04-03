import React from "react";

const Footer = () => {
  let today = new Date();

  return (
    <footer>
      <p>
        Copyright {today.getFullYear()} Made by{" "}
        <a href="https://github.com/laurielim">Laurie</a>.
      </p>
    </footer>
  );
};

export default Footer;
