import React, { useState,useEffect } from "react";
import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import Grids from "../components/Grids";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
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
        
         const response = await axios.get('http://localhost:5001/movieman/ongoingbid/getOnGoingBIDData')
         return response.data;
       }catch(e){
          return e;
       }
  
    }

   function openAddRecord() {
    
    }
      function editRecord(val){
     
   }

   function deleteRecord(val){
      console.log("Delete record>>"+ val);
      alertify.confirm('Confirm', 'Do you really want to Delete the record?', function(){
          axios.delete('http://localhost:5001/movieman/movie/deleteMovie', {data: { id: val }})
          .then(function (response) {
            getMovies();
            console.log("SUCCESSFULLY ADDED RECORD: ", response);
          })
          .catch(function (error) {
            console.log("ERROR ADDED RECORD: ",error);
          });
         }
      , function(){},
       
      ).set({labels:{ok:'Yes', cancel: 'No'}});


     
     
   }
 

  return (
       <Grids data={moviegriddata} addRecord={openAddRecord} editRecord={editRecord} deleteRecord={deleteRecord} selection="NO"/>  

   );

   

};
export default withRouter(MoviesGrid);
