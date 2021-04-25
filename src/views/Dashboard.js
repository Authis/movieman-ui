import React, { useState } from "react";
import "../styles/dashboard.css";
import MovieIcon from "../assets/images/video-camera.png";
import DashboardCards from "../components/dashboardCards";

import { withRouter } from "react-router-dom";

const options = [
  {
    name: "Movie",
    icon: MovieIcon,
  },
  {
    name: "BiddingMovies",
    icon: MovieIcon,
  },
  {
    name: "Users",
    icon: MovieIcon,
  },
  {
    name: "Settings",
    icon: MovieIcon,
  },
  {
    name: "Coming Soon ...",
    icon: MovieIcon,
  },
  {
    name: "Coming Soon ...",
    icon: MovieIcon,
  },
  {
    name: "Coming Soon ...",
    icon: MovieIcon,
  },
  {
    name: "Coming Soon ...",
    icon: MovieIcon,
  },
];
const Dashboard = (props) => {
  function navManageMovies() {
    console.log(">>>>>>>");
    props.history.push({
      pathname: "/Movies",
    });
  }

  return (
    <div className="main-container">
      {options.map((option, i) => {
        return (
          <DashboardCards
            key={i}
            name={option.name}
            icon={option.icon}
            navManageMovies={navManageMovies}
          />
        );
      })}
    </div>
  );
};
export default withRouter(Dashboard);
