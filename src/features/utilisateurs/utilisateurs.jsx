import { createSlice } from '@reduxjs/toolkit'


export const utilisateur = createSlice({
    name: 'utilisateur',
    initialState: {
        prenom: "",
        nom:"",
    },
    reducers: {
        setUtilisateur: (state, action) => {
            state.prenom = action.payload.prenom
            state.nom=action.payload.nom
        },
        emptyUtilisateur: (state) => {
            state.prenom = "",
                state.nom=""
        }
    }
})

export const { setUtilisateur, emptyUtilisateur } = utilisateur.actions

export const prenom = (state) => state.prenom
export const nom = (state) => state.nom

export default utilisateur.reducer




