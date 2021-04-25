import React, { useState } from "react";
import "../styles/forms.css";
import { withRouter } from "react-router-dom";

const Movies = () => {
  return (
    <div className="movie-container">
      <div className="movieform">
        <h1>Movie Details</h1>
        <h2>Movie Name</h2>
        <input
          type="text"
          class="forminput"
          name="movieName"
          placeholder=""
          value=""
        />

        <h2>Language</h2>
        <input
          type="text"
          class="forminput"
          name="launguage"
          placeholder=""
          value=""
        />

        <h2>Distributer Name</h2>
        <input
          type="text"
          class="forminput"
          name="distname"
          placeholder=""
          value=""
        />

        <h2>Producer Name</h2>
        <input
          type="text"
          class="forminput"
          name="prodname"
          placeholder=""
          value=""
        />

        <h2>Current POC Name</h2>
        <input
          type="text"
          class="forminput"
          name="currPocName"
          placeholder=""
          value=""
        />

        <h2>Current POC Number</h2>
        <input
          type="text"
          class="forminput"
          name="currPocNo"
          placeholder=""
          value=""
        />

        <h2>Director</h2>
        <input
          type="text"
          class="forminput"
          name="director"
          placeholder=""
          value=""
        />
        <h2>Actor</h2>
        <input
          type="text"
          class="forminput"
          name="actor"
          placeholder=""
          value=""
        />
        <h2>Actress</h2>
        <input
          type="text"
          class="forminput"
          name="actress"
          placeholder=""
          value=""
        />
        <button className="btn">Add Movie</button>
      </div>
    </div>
  );
};
export default withRouter(Movies);
