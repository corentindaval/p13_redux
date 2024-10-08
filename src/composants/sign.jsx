import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import {login }from "./interaction"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItemToUtilisateur } from '../features/utilisateurs/slice_utilisateurs.jsx'
import {isEmpty }from "./utils"
import { setToken } from '../features/token/token'


function Sign() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function changeUsername(e) {//recup champ utilisateur
        setUsername(e.target.value);
    }
    function changePassword(e) {//recup champ mot de passe
        setPassword(e.target.value);
    }
   async function signSubmit(e) {//action quand envoyer
       e.preventDefault();
       const dispatch = useDispatch();
        const data = {
            "email": username,
            "password":password
            }
       const res = await login(data);
       console.log(res)
       dispatch(setToken(res))

    }

    return (

        <main className="main bg-dark login">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" onChange={changeUsername} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={changePassword} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Link to="/profile" className="sign-in-button">Sign In</Link>
                    <button className="sign-in-button" id="sign_button" onClick={signSubmit } >Sign In</button>
                </form>
            </section>
        </main>

    )
}



export default Sign

