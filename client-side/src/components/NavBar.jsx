import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoB.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/about">
            <h6>About</h6>
          </Link>
          <Link className="link" to="/?cat=life">
            <h6>Life</h6>
          </Link>
          <Link className="link" to="/?cat=programing">
            <h6>Programming</h6>
          </Link>
          <span>Benard</span>
          <span>Logout</span>
           <Link ink className="link" to="/write">
          <span className="write">
              Write
          </span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
