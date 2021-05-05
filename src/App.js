import React, {useState} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Movies from "./views/Movies";
import MoviesGrid from "./views/MoviesGrid";
import "./styles/Global.css";

 

const App = () => {
  //const [currency, setCurrency] = useState();
  return (
     <Router>
           <div className="app">
               <Route exact path="/" component={Login} />
               <Route exact path="/dashboard" component={Dashboard}/>
               <Route exact path="/movies" component={Movies}/>
               <Route exact path="/MoviesGrid" component={MoviesGrid}/>
               {/* <Route exact path="/theaters" component={Theaters}/>
               <Route exact path="/biddingMovies" component={BiddingMovies}/>
               <Route exact path="/users" component={Users}/>  */}
           </div>
     </Router>
  );
};
export default App;
