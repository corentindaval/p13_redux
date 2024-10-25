import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { prenom, nom, setUtilisateur } from '../features/utilisateurs/utilisateurs';
import {valeur_token } from '../features/token/token';



function Nom(props) {
    const dispatch = useDispatch()
    const [changement, setchange] = useState(false);
    const firstName = useSelector(prenom);
    const lastName = useSelector(nom);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const val_token = useSelector(valeur_token);

    async function recup_profile() {
        const resp = await profile(val_token);
        console.log(resp)
    }
    recup_profile();

    console.log("val_token:"+val_token)
    function changefirstname(e) {
        setfirstname(e.target.value);
    }
    function changelastname(e) {
        setlastname(e.target.value);
    }

    function maj() {
        if (changement == false) {
            setchange(true)
        } else {
            setchange(false)
        }
    }

    function maj_nom() {
     
        var rep = {firstname,lastname}
        dispatch(setUtilisateur(rep));
        maj();
    }

    return (
        <div>
            {changement ? <div id="nom">
                <h1>Welcome back<br />{firstName+" "+lastName}</h1>
                <button className="edit-button" onClick={maj} >Edit Name</button>
            </div> : <div>
                    <h1>Welcome back</h1>
                    <div id="nv_nom">
                        <div id="part_g">
                            <input type="text" id="first_name" value={firstName} onChange={changefirstname} />
                            <input type="button" text="save" onClick={maj_nom } />
                        </div>
                        <div id="part_d">
                            <input type="text" id="last_name" value={lastName} onChange={changelastname} />
                            <input type="button" text="cancel" onClick={maj } />
                        </div>
                    </div>
                </div>
             }

        
        </div>
    )
   

}

export default Nom