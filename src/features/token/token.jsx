﻿import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const token = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload
        },
        emptyToken: (state) => {
            state.value = ""
        }
    }
})

export const { setToken, emptyToken } = token.actions

export const valeur_token = (state) => state.utilisateur.value

export default token.reducer