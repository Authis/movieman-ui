import React, { useState } from "react";
import "../styles/dashboard.css";
import MovieIcon from "../assets/images/video-camera.png";
import BiddingMovie from "../assets/images/bidding.png";
import Audience from "../assets/images/audience.png";
import Settings from "../assets/images/settings.png";
import Theater from "../assets/images/Theater.png";
import DashboardCards from "../components/dashboardCards";



import { withRouter } from "react-router-dom";

const options = [
  {
    name: "Movie",
    icon: MovieIcon,
  },
  {
    name: "BiddingMovies",
    icon: BiddingMovie,
  },
  {
    name: "Users",
    icon: Audience,
  },
  {
    name: "Settings",
    icon: Settings,
  },
  {
    name: "Theater",
    icon: Theater,
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
     // pathname: "/Movies",
     pathname: "/MoviesGrid",
    });
  }

  return (
    <div className="main-container">
      {
      options.map((option, i) => {
        return (
          <DashboardCards
            key={i}
            name={option.name}
            icon={option.icon}
            navManageMovies={navManageMovies}
          />
        );
      })
      }
    </div>
  );
};
export default withRouter(Dashboard);
