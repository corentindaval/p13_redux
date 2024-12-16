import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Navigate,Outlet }from 'react-router-dom'


function Redirection() {
    const val_token = useSelector((state) => state.Token.token);
    if (val_token != "") {
        return (
            <Outlet />
            )
    } else {
        return (
            <Navigate to="/"/>
            )
    }

}

export default Redirection