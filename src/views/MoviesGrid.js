import React, { useState } from "react";
import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import {options} from "../samples/sample.js"
import Grids from "../components/Grids";



const MoviesGrid = () => {
  return (
      <Grids date={options} /> 
   );
};
export default withRouter(MoviesGrid);
