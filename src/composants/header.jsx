import Logo from "../assets/argentBankLogo.png"
import { Link } from 'react-router-dom'
import React from 'react'
import { emptyToken } from '../features/token/token'
import {  emptyUtilisateur, prenom, nom} from '../features/utilisateurs/utilisateurs';
import { useDispatch,useSelector } from "react-redux";

function Header() {
  //  const val_token = useSelector(valeur_token);
    const dispatch = useDispatch()
 //   console.log(val_token)
    const firstName = useSelector(prenom);
    const lastName = useSelector(nom);

    console.log("prenom:"+firstName+" nom:"+lastName)

    function deconnection() {
       
        dispatch(emptyToken)
        dispatch(emptyUtilisateur)
        location.replace("/")
    }

   /* if (!val_token) {
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image"
                        src={Logo }
                        alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/profile/1">
                        <i className="fa fa-user-circle"></i>
                        {firstName }
                    </Link>
                    <button className="main-nav-item" onClick={deconnection}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </button>
                </div>
            </nav>
        )
    } else {*/
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/" >
                    <img className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        )
    }
//}

export default Header