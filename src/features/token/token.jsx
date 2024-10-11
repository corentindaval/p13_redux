import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: "",
}

export const token = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        emptyToken: (state) => {
            state.token = ""
        }
    }
})

export const { setToken, emptyToken } = token.actions

//export const valeur_token = (state) => state.token

export default token.reducer