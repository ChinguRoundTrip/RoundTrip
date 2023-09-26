import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header id="header" className="w-full">
      <div className="heroText">
          <h2>Explore.</h2>
        <Link to="/trips">
          <center>
            <button>Plan Now</button>
          </center>
        </Link>
      </div>
    </header>
  );
};

export default Header;
