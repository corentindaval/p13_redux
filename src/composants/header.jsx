import Logo from "../assets/argentBankLogo.png"
import { Link } from 'react-router-dom'
import React from 'react'

function Header(props) {
    const { connecter } = props;
    if (connecter == "true") {
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
                        Tony
                    </Link>
                    <Link className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
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