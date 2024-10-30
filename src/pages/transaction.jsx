import React from 'react'
import Header from "../composants/header"
import Footer from "../composants/footer"
import Transaction from "../composants/liste_transaction"
import Id_transaction from "../composants/id_transaction"

function Page_transaction() {
        return (
            <div>
                <Header />
                <Id_transaction nom_compte="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
                <Transaction />
                <Footer />
            </div>
        )
  

}

export default Page_transaction