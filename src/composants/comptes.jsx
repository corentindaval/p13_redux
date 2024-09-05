import React from 'react'

function Compte(props) {
    const { nom_compte,montant,description } = props;

    return (
        <section class="account">
            <div class="account-content-wrapper">
                <h3 class="account-title">{nom_compte}</h3>
                <p class="account-amount">{montant}</p>
                <p class="account-amount-description">{description}</p>
            </div>
            <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
            </div>
        </section>
    )

}

export default Compte

