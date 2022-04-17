import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>María Carla Lázaro</h3>
        <p>Guaymallén - Mendoza</p>
      </div>
      <div className="footer-contact">
        <h4>Contáctame</h4>
        <p>Y manos a la obra!!</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseño by @CLA</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
