import React, { useState,useEffect } from "react";
import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import Grids from "../components/Grids";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
const axios = require('axios').default;



const TheatresGrid = (props) => {
  

   let [theatregriddata, setTheatregriddata] = useState();
   useEffect( async ()=> {

   const data = await getTheatre();
   console.log("DYNAMIC ARRAY>>>>>>>>>>>>>>> ", data);
   setTheatregriddata(data);
      
   },[])

    async function getTheatre() {
       try{
        
         const response = await axios.get('http://localhost:5001/movieman/theatre/getTheatreData')
         return response.data;
       }catch(e){
          return e;
       }
  
    }

   function openAddRecord() {
   // getTheatre();
      console.log(">>>>>>>");
      props.history.push({
       pathname: "/AddTheatre",
      });
    }
      function editRecord(val){
      // try{ 
      //    const response =   axios.get('http://localhost:5001/movieman/movie/editMovies', {data: { id: val }})
      //    console.log("Selected Movie", response);
 
      //    return response.data;
      //  }catch(e){
      //     return e;
      //  }

       console.log(">>"+ val);
         props.history.push({
          pathname: "/AddTheatre",
        });
   
   }

   function deleteRecord(val){
      console.log("Delete record>>"+ val);
      alertify.confirm('Confirm', 'Do you really want to Delete the record?', function(){
          axios.delete('http://localhost:5001/movieman/theatre/deleteTheatre', {data: { id: val }})
          .then(function (response) {
            getTheatre();
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
       <Grids data={theatregriddata} addRecord={openAddRecord} editRecord={editRecord} deleteRecord={deleteRecord} selection="NO"/>  

   );

   

};
export default withRouter(TheatresGrid);
