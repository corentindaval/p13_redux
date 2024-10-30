import React, { useState } from 'react'

import fleche_bas from '../assets/fleche_bas.png'
import fleche_haut from '../assets/fleche_haut.png'
import crayon from '../assets/crayon.png'

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
            {changement ?<div className="transaction">
                    <div className="resumer">
                        <button className="b_detail rel" onClick={maj} ><img src={changement ? fleche_haut : fleche_bas} /></button>
                    <p className="date rel">{date}</p>
                    <p className="description rel">{description}</p>
                    <p className="amount rel">{amount}</p>
                    <p className="balance rel">{balance}</p>
                    </div>
                    <div className="detail">
                        <p className="type_transaction rd">Transaction Type: {type}</p>
                    <div className="s_categorie rd"><p className="categorie sep">Category: {categorie}</p><button className="b_crayon" ><img src={crayon} /></button></div>
                    <div className="s_categorie rd"><p className="note sep">Notes: {notes}</p><button className="b_crayon"><img src={crayon} /></button></div>
                    </div>
            </div>:<div className="transaction">
                <div className="resumer">
                    <button className="b_detail" onClick={maj} ><img src={changement ? fleche_haut : fleche_bas} /></button>
                        <p className="date rel">{date}</p>
                        <p className="description rel">{description}</p>
                        <p className="amount rel">{amount}</p>
                        <p className="balance rel">{balance}</p>
                </div>
            </div> 
            }


        </div>
    )


}

export default Transaction