import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//const items = useSelector(selectItems)

function Compte(props) {
    const { nom_compte,montant,description } = props;
    const navigate = useNavigate()

    function vue_transaction() {
        navigate("/profile/transaction")

    }

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{nom_compte}</h3>
                <p className="account-amount">{montant}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button" onClick={vue_transaction}>View transactions</button>
            </div>
        </section>
    )

}

export default Compte

