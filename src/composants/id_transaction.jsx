import React, { useState } from 'react'

function Id_transaction(props) {
    const {nom_compte,montant,description }=props
    return (
        <div id="id_transaction">
            <p>{nom_compte }</p>
            <h2>{montant }</h2>
            <p>{description}</p>
        </div>
        )

}

export default Id_transaction