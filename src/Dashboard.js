 import React, {useState} from 'react';
import './dashboard.css';
import {withRouter} from "react-router-dom";
import Movies from "./Movies";


function navManageMovies(history){
    console.log(">>>>>>>")
      history.push({
          pathname: '/Movies'
      })
  }
  


const Dashboard = (props) => {
  return (
            <div className="main-container">
                <div class="dash-container">
                <a href="" onClick={() => navManageMovies(props.history)}>
                    <div class="icon-container">
                         <div class="movie-icon"></div> 
                    </div></a>
                    <h2>Movies</h2>
                </div>
                <div class="dash-container">
                <a href="" >
                    <div class="icon-container">
                    </div>
                </a>
                    <h2>Theaters</h2>
                </div>
                <div class="dash-container">
                    <div class="icon-container">
                    </div>
                    <h2>BiddingMovies</h2>
                </div>
                <div class="dash-container">
                    <div class="icon-container">
                    </div>
                    <h2>Users</h2>
                </div>
                <div class="dash-container">
                    <div class="icon-container">
                    </div>
                    <h2>Settings</h2>
                </div>
                <div class="dash-container">
                    <div class="icon-container">
                    </div>
                    <h2>Coming Soon ..</h2>
                </div>
                <div class="dash-container">
                    <div class="icon-container">
                    </div>
                    <h2>Coming Soon ..</h2>
                </div>
                <div class="dash-container">
                    <div class="icon-container">
                    </div>
                    <h2>Coming Soon ..</h2>
                </div>

            </div>
        );
      };
 export default withRouter(Dashboard);
 