import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { valeur_token } from '../features/token/token';
import { setPrenom,setNom } from '../features/utilisateurs/utilisateurs'
import { profile,maj_profile } from "./interaction"



function Nom(props) {
    const dispatch = useDispatch()
    const [changement, setchange] = useState(false);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const val_token = useSelector((state) => state.Token.token);//correction effectuer
    const val_prenom = useSelector((state) => state.Utilisateur.prenom);
    const val_nom = useSelector((state) => state.Utilisateur.nom);

    async function recup_profile() {
        const resp = await profile(val_token);
        console.log(resp)
        dispatch(setPrenom(resp.body.firstName));
        dispatch(setNom(resp.body.lastName));
        console.log("nom:"+val_nom+" prenom:"+val_prenom)
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
        dispatch(setPrenom(firstname));
        dispatch(setNom(lastname));
        const data_save=[firstname,lastname]
       //  maj_profile(data_save);
        maj();
    }

    return (
        <div>
            {changement ?  <div>
                    <h1>Welcome back</h1>
                    <div id="nv_nom">
                        <div id="part_g">
                            <input type="text" id="first_name" placeholder={val_prenom } onChange={changefirstname} />
                            <input type="button" id="btn_save" value="save" onClick={maj_nom } />
                        </div>
                        <div id="part_d">
                            <input type="text" id="last_name" placeholder={val_nom} onChange={changelastname} />
                            <input type="button" id="btn_cancel" value="cancel" onClick={maj } />
                        </div>
                    </div>
                </div> : <div id="nom">
                <h1>Welcome back<br />{val_prenom+" "+val_nom}</h1>
                <button className="edit-button" onClick={maj} >Edit Name</button>
            </div> 
             }

        
        </div>
    )
   

}

export default Nom