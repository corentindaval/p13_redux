import { useDispatch } from 'react-redux'
import { addItemToUtilisateur } from '../features/utilisateurs/slice_utilisateurs.jsx'
import React from 'react'
import { useSelector } from 'react-redux'



function Nom(props) {
    const { changement } = props;
    if (changement == true) {
        return (
            <div>
             <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button" >Edit Name</button>
            </div>
  
        )
    } else {
        return (
            <div>
                <h1>Welcome back</h1>
                <div id="nv_nom">
                    <div id="part_g">
                        <input type="text" id="first_name" value="Tony" />
                        <input type="button" text="save"/>
                    </div>
                    <div id="part_d">
                        <input type="text" id="last_name" value="Jarvis" />
                        <input type="button" text="cancel" />
                    </div>
                </div>
            </div>
        )
    }
   





}

export default Nom