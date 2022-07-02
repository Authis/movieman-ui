import React, { useState,useEffect } from "react";

import ReactFlexyTable from "react-flexy-table";
 
import "react-flexy-table/dist/index.css";

import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import Grids from "../components/Grids";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
const axios = require('axios').default;



const Bids = (props) => {
  

   let [moviegriddata, setmoviegriddata] = useState();
   useEffect( async ()=> {

   const data = await getOnGoingBids();
   console.log("DYNAMIC ARRAY ", data);
     setmoviegriddata(data);
      
   },[])

    async function getOnGoingBids() {
       try{
        
         const response = await axios.get('http://localhost:5004/movieman/ongoingbid/get/ongoingbids')
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
 
            console.log("SUCCESSFULLY ADDED RECORD: ", response);
          })
          .catch(function (error) {
            console.log("ERROR ADDED RECORD: ",error);
          });
         }
      , function(){},
       
      ).set({labels:{ok:'Yes', cancel: 'No'}});


     
     
   }
   const formatData = () => {
      return [
      
        {
          header: "Bid ID",
          key:"bidId" 
        },{
          header: "Bid Status",
          key:"bidStatus" 
        },{
          header: "City",
          key:"city" 
        } , {
         header: "Movie Name",
         key: "moviename",
         td: (data) => {
           return <div>
             {data.movieDetails[0].movieName}
 
           </div>
         }
       },{
         header: "Theatre Name",
         key: "theatrename",
         td: (data) => {
           return <div>
             {data.theatreDetails[0].theatreName}
 
           </div>
         }
       },{
         header: "Address",
         key: "address",
         td: (data) => {
           return <div>
             {data.theatreDetails[0].address}
 
           </div>
         }
       }, {
         header: "Screening Time",
         key: "screeningtime",
         td: (data) => {
           return <div>
             {Date(data.screeningDetails[0].screeningTime)}
 
           </div>
         }
       },
  
      ]
   }
  
 

  return (
       <ReactFlexyTable data={moviegriddata} sortable filterable columns={formatData()}/>
   );

   

};
export default withRouter(Bids);
