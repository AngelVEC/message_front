import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {

    const navigate = useNavigate();

    localStorage.clear();
    navigate('/login');

    return (
        <div>
            
        </div>
    );
}

export default Logout;