import React, { useState,useEffect } from "react";
import ReactFlexyTable from "react-flexy-table";

import deleteIcon from "./../assets/images/delete.png"
import editIcon from "./../assets/images/edit.png"
import "react-flexy-table/dist/index.css"

 
import { withRouter } from "react-router-dom";
 
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
      console.log("Go Back Movie Grid 2");
       try{
         const response = await axios.get('http://localhost:5002/movieman/movie/get/movies')
         return response.data;
       }catch(e){
        return e;
       }
  
    }

   function openAddRecord() {
     // getMovies();
      console.log(">>>>>>>");
      props.history.push({
       pathname: "/AddMovies",
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
          pathname: "/AddMovies",
        });
   
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
 
   const additionalCols = [{
    header: "Actions",
    td: (data) => {
      return <div>
        <img src={deleteIcon} width="30" height="20" onClick={() => alert("this is delete for id " + data._id)} />  
         <img src={editIcon} width="30" height="20" onClick={() => alert("this is edit for id " + data._id)} /> 
         <input type="checkbox" value={data.id} onClick={() => alert("this is edit for id " + data._id)} />
      </div>
    }
  }]
  return (
    <div>
      <input
          type="button"
          class="button"
          value="Add New"
          onClick={openAddRecord}
        ></input>
    <ReactFlexyTable data={moviegriddata} sortable filterable additionalCols={additionalCols}
    />
 </div>
   );

   

};
export default withRouter(MoviesGrid);
