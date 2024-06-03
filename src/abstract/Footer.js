import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-copyright">
        <span>Copyright © </span>Joanna Grabowska
      </h2>
      <div className="footer-logo">
        <h1 className="footer-logo-text">JG-Veterinary</h1>
        <img
          src="https://icons.iconarchive.com/icons/manuel-morillo/dog/128/Dog-3-icon.png"
          width="128"
          height="128"
          alt="dog"
        />
      </div>
      <h3 className="footer-text">
        Coders <span>Lab</span> 2024
      </h3>
    </footer>
  );
};

export default Footer;
