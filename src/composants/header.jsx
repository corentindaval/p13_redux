import Logo from "..assets/argenBankLogo.png"
import React from 'react'

function Header(props) {
    const { connecter } = props;
    if (connecter === true) {
        return (
            <nav class="main-nav">
                <a class="main-nav-logo" href="./index.html">
                    <img class="main-nav-logo-image"
                        src={Logo }
                        alt="Argent Bank Logo" />
                    <h1 class="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a class="main-nav-item" href="./user.html">
                        <i class="fa fa-user-circle"></i>
                        Tony
                    </a>
                    <a class="main-nav-item" href="./index.html">
                        <i class="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
            </nav>
        )
    } else {
        return (
            <nav class="main-nav">
                <a class="main-nav-logo" href="./index.html">
                    <img class="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo" />
                    <h1 class="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a class="main-nav-item" href="./sign-in.html">
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header