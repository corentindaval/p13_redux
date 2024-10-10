import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { utilisateur_selectionner, setUtilisateur } from '../features/utilisateurs/utilisateurs';



function Nom(props) {

    const [changement, setchange] = useState(false);
    const utilisateur_select = useSelector(utilisateur_selectionner);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");

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
        const dispatch = useDispatch()
        var rep = {firstname,lastname}
        dispatch(setUtilisateur(rep));
        maj();
    }

    return (
        <div>
            {changement ? <div id="nom">
                <h1>Welcome back<br />{utilisateur_select[0]+" "+utilisateur_select[1]}</h1>
                <button className="edit-button" onClick={maj} >Edit Name</button>
            </div> : <div>
                    <h1>Welcome back</h1>
                    <div id="nv_nom">
                        <div id="part_g">
                            <input type="text" id="first_name" value={utilisateur_select[0]} onChange={changefirstname} />
                            <input type="button" text="save" onClick={maj_nom } />
                        </div>
                        <div id="part_d">
                            <input type="text" id="last_name" value={utilisateur_select[1]} onChange={changelastname} />
                            <input type="button" text="cancel" onClick={maj } />
                        </div>
                    </div>
                </div>
             }

        
        </div>
    )
   

}

export default Nom