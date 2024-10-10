import Logo from "../assets/argentBankLogo.png"
import { Link } from 'react-router-dom'
import React from 'react'
import { emptyToken, valeur_token } from '../features/token/token'
import { utilisateur_selectionner, emptyUtilisateur } from '../features/utilisateurs/utilisateurs';
import { useDispatch,useSelector } from "react-redux";

function Header() {
    const val_token=useSelector(valeur_token)
    const utilisateur_select = useSelector(utilisateur_selectionner);

    function deconnection() {
        const dispatch = useDispatch()
        dispatch(emptyToken)
        dispatch(emptyUtilisateur)
        location.replace("/")
    }

    if (val_token !== "") {
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
                        {utilisateur_select[0] }
                    </Link>
                    <button className="main-nav-item" onClick={deconnection}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
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

export default Header