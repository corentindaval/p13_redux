import Logo from "../assets/argentBankLogo.png"
import { useNavigate,Link } from 'react-router-dom'
import React from 'react'
import { emptyToken } from '../features/token/token'
import {  emptyUtilisateur, prenom, nom} from '../features/utilisateurs/utilisateurs';
import { useDispatch,useSelector } from "react-redux";

function Header() {
    const dispatch = useDispatch()
    const val_token = useSelector((state) => state.Token.token);
    const val_prenom = useSelector((state) => state.Utilisateur.prenom);
    const val_nom = useSelector((state) => state.Utilisateur.nom);
    const navigate = useNavigate()


    function deconnection() {
      
        dispatch(emptyToken())
        dispatch(emptyUtilisateur())
       navigate("/")
    }
    if (val_token != "") {
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/" >
                    <img className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div id="deco">
                    <Link to="/profile">{val_prenom }</Link>
                    <button className="main-nav-item dec" onClick={deconnection }>
                        <i className="fa fa-user-circle"></i>
                        Sign out
                    </button>
                </div>
            </nav>
        )
    } else {
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




    }
//}

export default Header