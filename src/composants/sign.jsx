import React, { useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {login,profile }from "./interaction"
import { useDispatch,useSelector } from 'react-redux'
import { isEmpty } from "./utils"
import { setToken } from '../features/token/token'




//const items = useSelector(selectItems)

function Sign() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate=useNavigate()

    function changeUsername(e) {
        setUsername(e.target.value);
    }
    function changePassword(e) {
        setPassword(e.target.value);
    }
   async function signSubmit(e) {
       e.preventDefault();
      
        const data = {
            "email": username,
            "password":password
            }
       const res = await login(data);
       console.log(res)
       if (res.status == 200) {
           ajt_token(res.body.token)
           const datap = {
               "token":res.body.token,
               }
           const resp = await profile(datap);
        
               console.log("id:"+resp.body.id)
           
           navigate("/profile")
       }
     
    }
    function ajt_token(token) {
      console.log("token:"+token)
        dispatch(setToken(token));
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
                    <button className="sign-in-button" id="sign_button" onClick={signSubmit } >Sign In</button>
                </form>
            </section>
        </main>

    )
}



export default Sign

