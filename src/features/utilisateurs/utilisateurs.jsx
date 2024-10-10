import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { first_name: "", last_name:"" },
}

export const utilisateur = createSlice({
    name: 'utilisateur',
    initialState,
    reducers: {
        setUtilisateur: (state, action) => {
            state.value = action.payload
        },
        emptyUtilisateur: (state) => {
            state.value = { first_name: "", last_name: "" }
        }
    }
})

export const { setUtilisateur, emptyUtilisateur } = utilisateur.actions

export const utilisateur_selectionner=(state)=>state.utilisateur.value

export default utilisateur.reducer




