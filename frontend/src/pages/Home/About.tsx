import React from "react";

import {
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <center>
      <div id="about">
        <div className="about-text">
        <Typography variant="h4">Welcome to RoundTrip</Typography>
          Plan your travel based on what you would like to do and where!
          <br />
          Pick your destination, add highly rated activities and restaurants, then allow RoundTrip to map out your itinerary.
        </div>
      </div>
    </center>
  );
};

export default About;
