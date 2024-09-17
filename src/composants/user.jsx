import React from 'react'
import Compte from"./comptes"

function User() {
    return (

        <main className="main bg-dark users">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Compte nom_compte="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />

            <Compte nom_compte="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />

            <Compte nom_compte="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance"/>

        </main>
    )

}

export default User



