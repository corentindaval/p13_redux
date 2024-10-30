import React from 'react'
import Transaction from "./transaction"


//  const { date, description, amount,balance,type,categorie,notes }

function List_transaction() {
    return (
        <div id="list_transaction">
            <div id="description"><p>date</p><p>description</p><p>amount</p><p>balance</p></div>
            <Transaction date="June 20th,2020" description="Golden Sun Bakery" amount="$5" balance="$2082,79" type="Electronic" categorie="Food" note="" />
            <Transaction date="June 20th,2020" description="Golden Sun Bakery" amount="$10" balance="$2087,79" type="Electronic" categorie="Food" note="" />
            <Transaction date="June 20th,2020" description="Golden Sun Bakery" amount="$20" balance="$2097,79" type="Electronic" categorie="Food" note="" />
            <Transaction date="June 20th,2020" description="Golden Sun Bakery" amount="$30" balance="$2117,79" type="Electronic" categorie="Food" note="" />
            <Transaction date="June 20th,2020" description="Golden Sun Bakery" amount="$40" balance="$2147,79" type="Electronic" categorie="Food" note="" />
            <Transaction date="June 20th,2020" description="Golden Sun Bakery" amount="$50" balance="$2187,79" type="Electronic" categorie="Food" note="" />
        </div>

    )

}

export default List_transaction