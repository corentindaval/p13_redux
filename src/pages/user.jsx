import React from 'react'
import Header from "../composants/header"
import Footer from "../composants/footer"
import User from "../composants/user"



function Page_user() {
    return (
        <div>
            <Header connecter="true" />
            <User/>
            <Footer />
        </div>
    )

}

export default Page_user