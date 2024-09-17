﻿import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItemToUtilisateur } from '../features/utilisateurs/slice_utilisateurs.jsx'
//const dispatch = useDispatch()
//const items = useSelector(selectItems)

function Sign() {
    return (

        <main className="main bg-dark login">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                    </div>
                    <Link to="/profile/1" class="sign-in-button">Sign In</Link>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )

}

export default Sign

