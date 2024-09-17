import React from 'react'
import { useSelector } from 'react-redux'
//const items = useSelector(selectItems)

function Compte(props) {
    const { nom_compte,montant,description } = props;

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{nom_compte}</h3>
                <p className="account-amount">{montant}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )

}

export default Compte

