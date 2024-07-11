import React from 'react';
import { baseUrl } from '../constant';
import axios from 'axios';
import { useState } from 'react';

function Login(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login_status, setLogin_Status] = useState("");

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function userNameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function register()
    {
        let data = JSON.stringify({
            "email": email,
            "username": username,
            "password": password
          });
          
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl+'register/',
            headers: { 
                'Content-Type': 'application/json', 
            },
            data : data
        };
        
        axios.request(config)
            .then(() => {
                setLogin_Status("Register Success!");
            })
            .catch((error) => {
                console.log(error);
                setLogin_Status("Register Failed!, user might be exist")

            });
    }

    return (
        <div>
            <h1>Register Page</h1>
            <p>Email: <input id={"email"} type={'email'} onChange={emailHandler}/></p>            
            <p>Username: <input id={"username"} type={'text'} onChange={userNameHandler}/></p>
            <p>Password: <input id={"password"} type={'password'} onChange={passwordHandler} /></p>
            <p><button id={"registerbtn"} onClick={register}>Register</button></p>
            <p id={'login_status'}>{login_status}</p>
        </div>
    );
}

export default Login;