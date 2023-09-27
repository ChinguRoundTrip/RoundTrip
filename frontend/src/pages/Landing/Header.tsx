import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Header = () => {

  return (
    <header id="header" className="w-full">
      <div className="heroText">
      {/* <Typography variant="h4">Welcome to RoundTrip</Typography>
          Plan your travel based on what you would like to do and where!
          <br />
          Pick your destination, add highly rated activities and restaurants, then allow RoundTrip to map out your itinerary. */}
          <h2>Explore.</h2>
         {/* <Link to="/trips">
          <center>
            <button>Plan Now</button>
          </center>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
