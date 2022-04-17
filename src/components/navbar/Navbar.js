import React from "react";
import "./Navbar.css";
import logo from "../../media/logo-mcl.png";


const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <img className="navbar-logo"
          src={logo}
          alt="logo-mcl"
        />
      </div>
    </nav>
  );
};

export default Navbar;
