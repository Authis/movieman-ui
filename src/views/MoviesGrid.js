import React, { useState,useEffect } from "react";
import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import {options} from "../samples/sample.js"
import Grids from "../components/Grids";
const axios = require('axios').default;



const MoviesGrid = (props) => {
  

   let [moviegriddata, setmoviegriddata] = useState();
   useEffect( async ()=> {

   const data = await getMovies();
   console.log("DYNAMIC ARRAY ", data);
     setmoviegriddata(data);
      
   },[])

    async function getMovies() {
       try{
         const response = await axios.get('http://localhost:5001/movieman/movie/getMovieData')
         return response.data;
       }catch(e){
          return e;
       }
  
    }

   function openAddRecord() {
      getMovies();
      console.log(">>>>>>>");
      props.history.push({
       pathname: "/AddMovies",
      });
    }

  return (
       <Grids data={moviegriddata} addRecord={openAddRecord}/>  

   );

   

};
export default withRouter(MoviesGrid);
