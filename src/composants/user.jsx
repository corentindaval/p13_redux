import React from 'react'
import Compte from".comptes"

function User() {
    return (

        <main class="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <Compte nom_compte="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />

            <Compte nom_compte="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />

            <Compte nom_compte="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance"/>

        </main>
    )

}

export default User



