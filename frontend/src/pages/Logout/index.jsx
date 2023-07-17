import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();

    axios.get('/logout')
    .then((response)=>{
        console.log('response is');
        console.log(response);
    })
    .catch(e=>{
        console.log('unable to logout');
        console.log('getting error');
        console.log('error is ',e);
    })

    setTimeout(()=>{
        navigate('/');
    },2000)

    return(
        <>
            <h1>Logout successful</h1>
            <h2>Redirecting to the Home Page...</h2>
        </>
    )

}

export default Logout;
