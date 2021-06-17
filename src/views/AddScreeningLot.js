import React, { useState } from "react";
import "../styles/forms.css";
import { withRouter } from "react-router-dom";
const axios = require('axios').default;

const AddMovies = (props) => {

  const [allValues, setAllValues] = useState({
    movieID: '',
    theatreID: '',
    screeningTime:'',
    ticketPrice:'',
    pocName: '',
    pocNo: '',
    minBids:'',
    maxBids: '',
    totalBids:'',
    insertedDate: '',
    updatedDate: '',
   });
  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })

  }

  function goBack() {
     
    props.history.push({
      pathname: "/TheatreGrid",
    });
  }

  function addTheatre(val) {
    console.log("add Theatre " + JSON.stringify(val.allValues))
    axios.post('http://localhost:5001/movieman/screening/addScreening', val.allValues)
      .then(function (response) {
        console.log("SUCCESSFULLY ADDED RECORD: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  

  return (
    <div className="data-container">
      <input type="button" class="button" value="Back" onClick={() => goBack()}>

      </input>
      <div className="dataform">
        <h1>Screening Lot Details</h1>
        <h2>Movie ID</h2>
        <input type="text" class="forminput" name="movieID" placeholder="" onChange={changeHandler} />

        <h2>Theatre ID</h2>
        <input type="text" class="forminput" name="theatreID" placeholder="" onChange={changeHandler} />

        <h2>Screening Time</h2>
        <input type="text" class="forminput" name="screeningTime" placeholder="" onChange={changeHandler} />

        <h2>Ticket Price</h2>
        <input type="text" class="forminput" name="ticketPrice" placeholder="" onChange={changeHandler} />

        <h2>POC Name</h2>
        <input type="text" class="forminput" name="pocName" placeholder="" onChange={changeHandler} />

        <h2>POC No</h2>
        <input type="text" class="forminput" name="pocNo" placeholder="" onChange={changeHandler} />

        <h2>Minimum Bids</h2>
        <input type="text" class="forminput" name="minBids" placeholder="" onChange={changeHandler} />

        <h2>Maximum Bids</h2>
        <input type="text" class="forminput" name="maxBids" placeholder="" onChange={changeHandler} />

        <h2>Total Bids</h2>
        <input type="text" class="forminput" name="totalBids" placeholder="" onChange={changeHandler} />

        
        <button className="btn" onClick={() => addTheatre({ allValues })}>Add Movie</button>
      </div>
    </div>
  );
};
export default withRouter(AddMovies);
