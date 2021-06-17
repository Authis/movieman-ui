import React, {useState} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import AddMovies from "./views/AddMovies";
import MoviesGrid from "./views/MoviesGrid";
import AddTheatre from "./views/AddTheatre";
import TheatresGrid from "./views/TheatresGrid";
import AddScreeningLot from "./views/AddScreeningLot";
import ScrenningLotGrid from "./views/ScrenningLotGrid";
import "./styles/Global.css";

 

const App = () => {
  //const [currency, setCurrency] = useState();
  return (
     <Router>
           <div className="app">
               <Route exact path="/" component={Login} />
               <Route exact path="/dashboard" component={Dashboard}/>
               <Route exact path="/addmovies" component={AddMovies}/>
               <Route exact path="/MoviesGrid" component={MoviesGrid}/>
               <Route exact path="/TheatresGrid" component={TheatresGrid}/>
               <Route exact path="/AddTheatre" component={AddTheatre}/>
               <Route exact path="/ScrenningLotGrid" component={ScrenningLotGrid}/>
               <Route exact path="/AddScreeningLot" component={AddScreeningLot}/>
               
               {/* 
               <Route exact path="/biddingMovies" component={BiddingMovies}/>
               <Route exact path="/users" component={Users}/>  */}
           </div>
     </Router>
  );
};
export default App;
