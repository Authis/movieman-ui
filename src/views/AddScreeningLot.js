import React, { useState,useEffect,useCallback } from "react";
import "../styles/forms.css";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
import { withRouter } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react';
import {DateTimeInput} from 'semantic-ui-calendar-react';
const axios = require('axios').default;

const AddMovies = (props) => {
  const initialState = {
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
  };
 const [allValues, setAllValues] = useState(initialState );
  let [movieList, setMovieList] = useState([]);
  let [theatreList, setTheatreList] = useState([]);
  
   
 


  useEffect( async() => {

    const movieListOptions = await getMoviesDrop();
    console.log("Movie >>>>>>>>>>>>>>>>>"+JSON.stringify(movieListOptions));
    setMovieList(movieListOptions)

 
    const theatreListOptions = await getTheatreDrop();
    console.log("Theatre >>>>>>>>>>>>>>>>>"+JSON.stringify(theatreListOptions));
    setTheatreList(theatreListOptions)
    
      
  },[])



 const clearState = () => {
  setAllValues({ ...initialState });
};
 
  async function getMoviesDrop() {
    try{
      const response = await axios.get('http://localhost:5002/movieman/movie/get/movies');
      let movieArr = [];
      response.data.map((option,i) => {
        movieArr.push({
         "key": option._id,
         "value" : option._id,
         "text" : option.movieName,
       })
    })
  
      return movieArr;
    }catch(e){
       return e;
    }

 }

 async function getTheatreDrop() {
  try{
   
    const response = await axios.get('http://localhost:5001/movieman/theatre/get/theatres');
    let thetreArr = [];
    response.data.map((option,i) => {
      thetreArr.push({
       "key": option._id,
       "value" : option._id,
       "text" : option.theatreName +"-"+option.screenName,
     })
  })
    return thetreArr;
  }catch(e){
     return e;
  }

}

const formatDate = (dateString) => { 
  let date = dateString.split(" "); date[1] = date[1]+":00Z";return new Date(date[0]+"T"+date[1])
}
  
  const changeHandler = e => {
    console.log("changeHandler >>> "+ e.target.name +"----"+e.target.value)
    setAllValues({ ...allValues, [e.target.name]: e.target.value })

  }

  const dropChangeHandler = (e,data) => {
    console.log("movieChangeHandler >>>>", data);
    setAllValues({ ...allValues, [data.name]: data.value })
  }

  // const changeHandler = useCallback(
  //   ({target:{name,value}}) => setAllValues(state => ({ ...state, [name]:value }), [])
  // );


  function goBack() {
     
    props.history.push({
      pathname: "/TheatreGrid",
    });
  }

  function addTheatre(val) {
    
    val.allValues.screeningTime = formatDate(val.allValues.screeningTime);
    console.log("add Theatre " + JSON.stringify(val.allValues))
    axios.post('http://localhost:5003/movieman/screening/add', val.allValues)
      .then(function (response) {
        alertify.alert('Add Screening', 'SUCCESSFULLY ADDED RECORD');
        //clearState();
         console.log("SUCCESSFULLY ADDED RECORD: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  // const handleChange = (event, {name, value}) => {
  //   if (this.state.hasOwnProperty(name)) {
  //     this.setState({ [name]: value });
  //   }
  // }

  

  return (
    <div className="data-container">
      <input type="button" class="button" value="Back" onClick={() => goBack()}>

      </input>
      <div className="dataform">
        <h1>Screening Lot Details</h1>
        <h2>Movie ID</h2>
        <Dropdown placeholder='Select Movie' name="movieID" fluid search selection options={movieList} onChange={dropChangeHandler} />
    
        <h2>Theatre ID</h2>
        <Dropdown placeholder='Theatre Movie' name="theatreID" fluid search selection options={theatreList} onChange={dropChangeHandler} />

        <h2>Screening Time</h2>
         <DateTimeInput
         dateFormat="YYYY-MM-DD"
          name="screeningTime"
          placeholder="Date Time"
          value={allValues.screeningTime}
          iconPosition="left"
          onChange={(event,{value}) => setAllValues({ ...allValues, screeningTime: value})}
        />
        <h2>Ticket Price</h2>  
        <input type="text" class="forminput" name="ticketPrice" placeholder="" 
        onChange={changeHandler} />

        <h2>POC Name</h2>
        <input type="text" class="forminput" name="pocName" placeholder="" onChange={changeHandler} />

        <h2>POC No</h2>
        <input type="text" class="forminput" name="pocNo" placeholder="" onChange={changeHandler} />

        <h2>Minimum Bids</h2>
        <input type="text" class="forminput" name="minBids" placeholder="" onChange={changeHandler} />

        <h2>Maximum Bids</h2>
        <input type="text" class="forminput" name="maxBids" placeholder="" onChange={changeHandler} />
        
        <button className="btn" onClick={() => addTheatre({ allValues })}>Add Movie</button>
      </div>
    </div>
  );
};
export default withRouter(AddMovies);
