import React, { useState } from "react";
import "../styles/forms.css";
import { withRouter } from "react-router-dom";
const axios = require('axios').default;

const AddMovies = (props) => {

  const [allValues, setAllValues] = useState({
    theatreName: '',
    city: '',
    district:'',
    address:'',
    state: '',
    screenName: '',
    totalScreens:'',
    screenTech: '',
    soundTech:'',
    totNoOfSeats: '',
    pocName: '',
    PocNo: '',
   });
  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })

  }

  function goBack() {
    console.log("Go Back Theatre Grid");
    props.history.push({
      pathname: "/TheatreGrid",
    });
  }

  function addTheatre(val) {
    console.log("add Theatre " + JSON.stringify(val.allValues))
    axios.post('http://localhost:5001/movieman/theatre/add', val.allValues)
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
        <h1>Theatre Details</h1>
        <h2>Theatre Name</h2>
        <input type="text" class="forminput" name="theatreName" placeholder="" onChange={changeHandler} />

        <h2>City</h2>
        <input type="text" class="forminput" name="city" placeholder="" onChange={changeHandler} />

        <h2>District</h2>
        <input type="text" class="forminput" name="district" placeholder="" onChange={changeHandler} />

        <h2>Address</h2>
        <input type="text" class="forminput" name="address" placeholder="" onChange={changeHandler} />

        <h2>State</h2>
        <input type="text" class="forminput" name="state" placeholder="" onChange={changeHandler} />

        <h2>Screen Name</h2>
        <input type="text" class="forminput" name="screenName" placeholder="" onChange={changeHandler} />

        <h2>Total Screens</h2>
        <input type="text" class="forminput" name="totalScreens" placeholder="" onChange={changeHandler} />

        <h2>Screen Technology</h2>
        <input type="text" class="forminput" name="screenTech" placeholder="" onChange={changeHandler} />

        <h2>Sound Technology</h2>
        <input type="text" class="forminput" name="soundTech" placeholder="" onChange={changeHandler} />

        <h2>Total Number of Seats</h2>
        <input type="text" class="forminput" name="totNoOfSeats" placeholder="" onChange={changeHandler} />

        <h2>POC Name</h2>
        <input type="text" class="forminput" name="pocName" placeholder="" onChange={changeHandler} />

        <h2>POC Number</h2>
        <input type="text" class="forminput" name="PocNo" placeholder="" onChange={changeHandler} />

        <button className="btn" onClick={() => addTheatre({ allValues })}>Add Theatre</button>
      </div>
    </div>
  );
};
export default withRouter(AddMovies);
