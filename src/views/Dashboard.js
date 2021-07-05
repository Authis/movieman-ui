import React, { useState } from "react";
import "../styles/dashboard.css";
import MovieIcon from "../assets/images/video-camera.png";
import BiddingMovie from "../assets/images/bidding.png";
import Audience from "../assets/images/audience.png";
import Settings from "../assets/images/settings.png";
import Theater from "../assets/images/Theater.png";
import LotteryBalls from "../assets/images/lotteryballs.jpeg";
import DashboardCards from "../components/dashboardCards";





import { withRouter } from "react-router-dom";

const options = [
  {
    name: "Movie",
    icon: MovieIcon,
    nav:"/MoviesGrid",
  },
  {
    name: "Theater",
    icon: Theater,
    nav:"/TheatresGrid",
  },
  {
    name: "Screening Lot",
    icon: LotteryBalls,
    nav:"/ScrenningLotGrid",
  },
 
  {
    name: "BIDS",
    icon: Settings,
    nav:"/Bids",
  },
  
  {
    name: "User Bids",
    icon: MovieIcon,
    nav:"/MoviesGrid",
  },
  {
    name: "Coming Soon ...",
    icon: MovieIcon,
    nav:"/MoviesGrid",
  },
  {
    name: "Users",
    icon: Audience,
    nav:"/MoviesGrid",
  },
  {
    name: "Coming Soon ...",
    icon: MovieIcon,
    nav:"/MoviesGrid",
  },
];
const Dashboard = (props) => {
  function navManageMovies(val) {
      props.history.push({
      pathname: val,
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
            navigation={option.nav}
            navManageMovies={navManageMovies}
          />
        );
      })
      }
    </div>
  );
};
export default withRouter(Dashboard);
