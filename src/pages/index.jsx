import React from 'react'
import Header from "../composants/header"
import Footer from "../composants/footer"
import Accueil from "../composants/accueil"



function Page_accueil() {
    return (
        <div>
            <Header connecter="false"/>
            <Accueil/>
            <Footer/>
        </div>
    )

}

export default Page_accueil