import React, { useState } from 'react'

import fleche_bas from '../assets/fleche_bas.png'
import fleche_haut from '../assets/fleche_haut.png'

function Transaction(props) {
    const [changement, setchange] = useState(false);
    const { date, description, amount,balance,type,categorie,notes } = props;


    function maj() {
        if (changement == false) {
            setchange(true)
        } else {
            setchange(false)
        }
    }


    return (
        <div>
            {changement ? <div className="transaction">
                <div className="resumer">
                    <button className="b_detail" onClick={maj} ><img src={changement ? fleche_haut : fleche_bas} /></button>
                    <p className="date">{date}</p>
                    <p className="description">{description}</p>
                    <p className="amount">{amount}</p>
                    <p className="balance">{balance}</p>
                </div>
            </div> : <div className="transaction">
                    <div className="resumer">
                        <button className="b_detail" onClick={maj} ><img src={changement ? fleche_haut : fleche_bas} /></button>
                        <p className="date">{date}</p>
                        <p className="description">{description}</p>
                        <p className="amount">{amount}</p>
                        <p className="balance">{balance}</p>
                    </div>
                    <div className="detail">
                        <p className="type_transaction">Transaction Type: {type}</p>
                        <div className="s_categorie"><p className="categorie">Category: {categorie}</p><button /></div>
                        <div className="s_categorie"><p className="note">Notes: {notes}</p><button /></div>
                    </div>
            </div>
            }


        </div>
    )


}

export default Transaction