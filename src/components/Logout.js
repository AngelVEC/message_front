import React from 'react';
import  { Navigate } from 'react-router-dom'
function Logout(props) {
    localStorage.clear();

    return <Navigate to ='/login'/>;
}

export default Logout;