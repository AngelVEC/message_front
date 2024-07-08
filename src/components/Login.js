import React from 'react';
import { baseUrl } from '../constant';
import axios from 'axios';
import { useState } from 'react';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login_status, setLogin_Status] = useState("");

    function userNameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function login()
    {
        let data = JSON.stringify({
            "username": username,
            "password": password
          });
          
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl+'auth/',
            headers: { 
                'Content-Type': 'application/json', 
            },
            data : data
        };
        
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setLogin_Status("Login Success!")
            })
            .catch((error) => {
                console.log(error);
                setLogin_Status("Username or password is wrong!")

            });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>Username: <input id={"username"} type={'text'} onChange={userNameHandler}/></p>
            <p>Password: <input id={"password"} type={'password'} onChange={passwordHandler} /></p>
            <p><button id={"loginbtn"} onClick={login}>Login</button></p>
            <p id={'login_status'}>{login_status}</p>
        </div>
    );
}

export default Login;