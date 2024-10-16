import React, { useState } from 'react'

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
                    <button className="b_detail" onClick={maj} ></button>
                    <p className="date">{date}</p>
                    <p className="description">{description}</p>
                    <p className="amount">{amount}</p>
                    <p className="balance">{balance}</p>
                </div>
            </div> : <div className="transaction">
                    <div className="resumer">
                        <button className="b_detail" onClick={maj} ></button>
                        <p className="date">{date}</p>
                        <p className="description">{description}</p>
                        <p className="amount">{amount}</p>
                        <p className="balance">{balance}</p>
                    </div>
                    <div className="detail">
                        <p className="type_transaction">Transaction Type: {type}</p>
                        <div className="categorie"><p className="d_categorie">Category: {categorie}</p><button /></div>
                        <div className="note"><p className="d_note">Notes: {notes}</p><button /></div>
                    </div>
            </div>
            }


        </div>
    )


}

export default Transaction