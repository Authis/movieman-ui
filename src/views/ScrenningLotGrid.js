import React, { useState, useEffect } from "react";
import "../styles/grid.css";
import { withRouter } from "react-router-dom";
import Grids from "../components/Grids";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
const axios = require('axios').default;



const ScrenningLotGrid = (props) => {


  let [scrLotgriddata, setScrLotgriddata] = useState();
  useEffect(async () => {

    const data = await getScreening();
   // console.log("DYNAMIC ARRAY>>>>>>>>>>>>>>> ", data);
 
   let screeningArr = [];
   data.map((option,i) => {
   //console.log( ">>>>",Object.keys(option))
   console.log( ">>>>",option)
      screeningArr.push({
        "screeningID":option._id,
        "movieName": option.movieDetail[0].movieName,
        "theatreName": option.theatreDetail[0].theatreName,
        "City": option.theatreDetail[0].city,
        "screeningTime":option.screeningTime,
        "ticketPrice":option.ticketPrice,
        "pocName": option.pocName,
        "pocNo": option.pocNo,
        "minBids":option.minBids,
        "maxBids": option.maxBids,
        "totalBids":option.totalBids

      })

   })
  

    setScrLotgriddata(screeningArr);

  }, [])

  async function getScreening() {
    try {

      const response = await axios.get('http://localhost:5001/movieman/screening/getScreeningData')
      return response.data;
    } catch (e) {
      return e;
    }

  }

  function openAddRecord() {
    // getTheatre();
    console.log(">>>>>>>");
    props.history.push({
      pathname: "/AddScreeningLot",
    });
  }
  function editRecord(val) {
    // try{ 
    //    const response =   axios.get('http://localhost:5001/movieman/movie/editMovies', {data: { id: val }})
    //    console.log("Selected Movie", response);

    //    return response.data;
    //  }catch(e){
    //     return e;
    //  }

    console.log(">>" + val);
    props.history.push({
      pathname: "/ScrenningLotGrid",
    });

  }

   function publishBidding(arrVal) {
    console.log("Array of Screening ID ", arrVal)
    try { 
      const response =  axios.post('http://localhost:5001/movieman/ongoingbid/insertOnGoingBIDData',
      {data: { arrayIds:arrVal}})
      return response.data;
    } catch (e) {
      return e;
    }

  }

  function deleteRecord(val) {
    console.log("Delete record>>" + val);
    alertify.confirm('Confirm', 'Do you really want to Delete the record?', function () {
      axios.delete('http://localhost:5001/movieman/screening/deleteScreening', { data: { id: val } })
        .then(function (response) {
          getScreening();
          console.log("SUCCESSFULLY ADDED RECORD: ", response);
        })
        .catch(function (error) {
          console.log("ERROR ADDED RECORD: ", error);
        });
    }
      , function () { },

    ).set({ labels: { ok: 'Yes', cancel: 'No' } });




  }


  return (
    <Grids data={scrLotgriddata} addRecord={openAddRecord} editRecord={editRecord} deleteRecord={deleteRecord} selection="checkbox"
      publishBidding={publishBidding}
    />

  );



};
export default withRouter(ScrenningLotGrid);
