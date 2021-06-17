import React, { useState } from "react";
import "../styles/forms.css";
import { withRouter } from "react-router-dom";
const axios = require('axios').default;

const AddMovies = (props) => {

  const [allValues, setAllValues] = useState({
    movieName: '',
    launguage: '',
    synopsis:'',
    genre:'',
    actor: '',
    actress: '',
    director:'',
    prodname: '',
    relDate:'',
    distname: '',
    currPocName: '',
    currPocNo: '',
   });
  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })

  }

  function goBack() {
     props.history.push({
      pathname: "/MoviesGrid",
    });
  }

  function addMovies(val) {
    console.log("add movies " + JSON.stringify(val.allValues))
    axios.post('http://localhost:5001/movieman/movie/addMovies', val.allValues)
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
        <h1>Movie Details</h1>
        <h2>Movie Name</h2>
        <input type="text" class="forminput" name="movieName" placeholder="" onChange={changeHandler} />

        <h2>Language</h2>
        <input type="text" class="forminput" name="launguage" placeholder="" onChange={changeHandler} />

        <h2>Synopsis</h2>
        <input type="text" class="forminput" name="synopsis" placeholder="" onChange={changeHandler} />

        <h2>Genre</h2>
        <input type="text" class="forminput" name="genre" placeholder="" onChange={changeHandler} />

        <h2>Lead Actor</h2>
        <input type="text" class="forminput" name="actor" placeholder="" onChange={changeHandler} />

        <h2>Lead Actress</h2>
        <input type="text" class="forminput" name="actress" placeholder="" onChange={changeHandler} />

        <h2>Director</h2>
        <input type="text" class="forminput" name="director" placeholder="" onChange={changeHandler} />

        <h2>Producer Name</h2>
        <input type="text" class="forminput" name="prodname" placeholder="" onChange={changeHandler} />

        <h2>Release Date</h2>
        <input type="text" class="forminput" name="relDate" placeholder="" onChange={changeHandler} />

        <h2>Distributer Name</h2>
        <input type="text" class="forminput" name="distname" placeholder="" onChange={changeHandler} />

        <h2>Current POC Name</h2>
        <input type="text" class="forminput" name="currPocName" placeholder="" onChange={changeHandler} />

        <h2>Current POC Number</h2>
        <input type="text" class="forminput" name="currPocNo" placeholder="" onChange={changeHandler} />

        <button className="btn" onClick={() => addMovies({ allValues })}>Add Movie</button>
      </div>
    </div>
  );
};
export default withRouter(AddMovies);
