import React, {useState} from 'react';
import './login.css';
import {withRouter} from "react-router-dom";
import Dashboard from "./Dashboard";

function loginAction(logDetails,history){
  console.log(">>>>>>>"+logDetails)
    history.push({
        pathname: '/Dashboard'
    })
}

const Login = (props) => {
const [username, setUserName] = useState('');
const [password, setPassword] = useState('');


     return (
        <div className="form-container">
            <div class="user-img"></div>
            <ul className="list">
                <li><h2>Movie Man Login</h2></li>
                <li><input type="text" name="User name" placeholder="" value={username} onChange={(event) => setUserName(event.target.value)}/></li>
                <li><input type="password" name="password" placeholder="" value={password} onChange={(event) => setPassword(event.target.value)}/></li>
                <li><input type="button" name="Login" value="Login" onClick={() => loginAction({username,password},props.history)}/></li>
                <li>Forget Password?</li>
            </ul>
        </div>
    );
  };
  export default withRouter(Login);
  