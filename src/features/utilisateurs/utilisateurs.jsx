import { createSlice } from '@reduxjs/toolkit'


export const utilisateur = createSlice({
    name: 'utilisateur',
    initialState: {
        
        prenom: "",
        nom:"",
    },
    reducers: {
        setPrenom: (state, action) => {
            state.prenom = action.payload
        },
        setNom: (state, action) => {
            state.nom = action.payload
        },
        emptyUtilisateur: (state) => {
            state.prenom = "",
                state.nom=""
        }
    }
})

export const { setPrenom,setNom, emptyUtilisateur } = utilisateur.actions

export const prenom = (state) => state.prenom
export const nom = (state) => state.nom

export default utilisateur.reducer




